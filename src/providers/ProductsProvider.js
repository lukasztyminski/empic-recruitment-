import React, { createContext, useEffect, useState } from 'react';
import { useProducts } from 'hooks/useProducts';

export const ProductsContext = createContext({
  productsList: [],
  setNumberOfProducts: () => {},
});

const ProductsProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);
  const [totalOrderSum, setTotalOrderSum] = useState(0);

  const { getProducts } = useProducts();

  const prepareData = (products) =>
    products.map((product) => ({
      ...product,
      price: parseFloat(product.price),
      numberOfProducts: product.min,
      sumOfProducts: product.min * product.price,
    }));

  useEffect(() => {
    (async () => {
      const products = await getProducts();
      setProductsList(prepareData(products));
    })();
  }, [getProducts]);

  useEffect(() => {
    if (productsList.length > 0) {
      setTotalOrderSum(productsList.reduce((acc, product) => acc + product.sumOfProducts, 0).toFixed(2));
    }
  }, [productsList]);

  const setNumberOfProducts = ({ pid, quantityOfProducts }) => {
    setProductsList((prevState) =>
      prevState.map((product) =>
        product.pid === pid ? { ...product, quantityOfProducts, sumOfProducts: quantityOfProducts * product.price } : { ...product }
      )
    );
  };

  return (
    <ProductsContext.Provider
      value={{
        productsList,
        totalOrderSum,
        setNumberOfProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
