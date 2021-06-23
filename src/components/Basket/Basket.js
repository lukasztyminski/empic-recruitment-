import React, { useContext } from 'react';
import { Title } from 'components/Title/Title';
import ProductBasket from 'components/ProductBasket/ProductBasket';
import { ProductsContext } from 'providers/ProductsProvider';

const Basket = () => {
  const { productsList: productsBasket } = useContext(ProductsContext);

  return (
    <>
      <Title>Koszyk</Title>
      <ul>
        {productsBasket.map((product) => (
          <ProductBasket key={`basket-pid${product.pid}`} product={product} />
        ))}
      </ul>
    </>
  );
};

export default Basket;
