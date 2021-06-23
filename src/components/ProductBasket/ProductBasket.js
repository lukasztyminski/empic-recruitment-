import React, { useCallback, useContext, useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import { ProductsContext } from 'providers/ProductsProvider';
import { productsAPI } from 'hooks/useProducts';
import { API_PRODUCTS } from 'constants';
import { ERROR_TYPE_PRODUCT_CHECK } from 'constants';

const { PRODUCT_CHECK } = API_PRODUCTS;
const { INCORRECT_QUANTITY } = ERROR_TYPE_PRODUCT_CHECK;

const ProductBasket = ({ product: { name, isBlocked, min, max, pid } }) => {
  const [quantityOfProducts, setQuantityOfProducts] = useState(min);
  const { setNumberOfProducts, totalOrderSum } = useContext(ProductsContext);

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
    <div>
      {name} | {`Obecnie masz ${quantityOfProducts} sztuk produktu`}
      <button disabled={isBlocked} onClick={addProduct}>
        +
      </button>
      <button disabled={isBlocked} onClick={removeProduct}>
        -
      </button>
    </div>
  );
};

export default ProductBasket;
