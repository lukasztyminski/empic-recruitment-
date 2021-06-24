import React, { useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import { ProductsContext } from 'providers/ProductsProvider';
import { Button } from 'components/Button/Button';
import { productsAPI } from 'hooks/useProducts';
import { API_PRODUCTS } from 'constants';
import { ERROR_TYPE_PRODUCT_CHECK } from 'constants';
import { ProductBasketWrapper, TitleWrapper, Name, Quantity, ButtonWrapper } from './ProductBasket.style';
import { ProductShape } from 'types';

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

          const {
            data: { errorType, isError },
          } = result;

          if (isError && errorType === INCORRECT_QUANTITY) {
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
      <ProductBasketWrapper className="row">
        <TitleWrapper>
          <Name>{name}</Name>Obecnie masz:<Quantity>{quantityOfProducts}</Quantity>sztuk produktu
        </TitleWrapper>
        <ButtonWrapper>
          <Button isBig value={quantityOfProducts} disabled={isBlocked} onClick={addProduct}>
            +
          </Button>
          <Button isBig value={quantityOfProducts} disabled={isBlocked} onClick={removeProduct}>
            -
          </Button>
        </ButtonWrapper>
      </ProductBasketWrapper>
    </>
  );
};

ProductBasket.propTypes = {
  product: PropTypes.shape(ProductShape),
};

export default ProductBasket;
