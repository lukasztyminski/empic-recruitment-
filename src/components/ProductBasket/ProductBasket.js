import React, { useCallback, useContext, useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import { ProductsContext } from 'providers/ProductsProvider';
import { Button } from 'components/Button/Button';
import { productsAPI } from 'hooks/useProducts';
import { API_PRODUCTS } from 'constants';
import { ERROR_TYPE_PRODUCT_CHECK } from 'constants';
import { ProductBasketWrapper, Name, Quantity, ButtonWrapper } from './ProductBasket.style';

const { PRODUCT_CHECK } = API_PRODUCTS;
const { INCORRECT_QUANTITY } = ERROR_TYPE_PRODUCT_CHECK;

const ProductBasket = ({ product: { name, isBlocked, min, max, pid } }) => {
  const [quantityOfProducts, setQuantityOfProducts] = useState(min);
  const { setNumberOfProducts } = useContext(ProductsContext);

  useEffect(() => {
    if (quantityOfProducts !== min) {
      checkNumberOfPieces(quantityOfProducts);
    }

    setNumberOfProducts({ pid, quantityOfProducts });
  }, [quantityOfProducts]);

  const checkNumberOfPieces = useCallback(
    debounce((quantity) => {
      (async () => {
        try {
          const result = await productsAPI.post(PRODUCT_CHECK, {
            pid,
            quantity,
          });

          if (result.data.errorType === INCORRECT_QUANTITY) {
            setQuantityOfProducts(min);
          }
        } catch (e) {
          console.log(e);
        }
      })();
    }, 200),
    []
  );

  const addProduct = () => {
    setQuantityOfProducts((prevState) => (prevState === max ? prevState : prevState + 1));
  };

  const removeProduct = () => {
    setQuantityOfProducts((prevState) => (prevState === min ? prevState : prevState - 1));
  };

  return (
    <>
      <ProductBasketWrapper>
        <Name>{name}</Name>| <Quantity>{`Obecnie masz: ${quantityOfProducts} sztuk produktu`}</Quantity>
        <ButtonWrapper>
          <Button value={quantityOfProducts} disabled={isBlocked} onClick={addProduct}>
            +
          </Button>
          <Button value={quantityOfProducts} disabled={isBlocked} onClick={removeProduct}>
            -
          </Button>
        </ButtonWrapper>
      </ProductBasketWrapper>
    </>
  );
};

export default ProductBasket;
