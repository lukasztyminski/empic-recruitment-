import React, { useContext } from 'react';
import SingleProduct from 'components/SingleProduct/SingleProduct';
import { Title } from 'components/Title/Title';
import { ProductsContext } from 'providers/ProductsProvider';

const ListProducts = () => {
  const { productsList: products } = useContext(ProductsContext);

  return (
    <>
      <Title>Lista produktów</Title>
      <ul>
        {products.map((productData) => (
          <SingleProduct key={productData.pid} productData={productData} />
        ))}
      </ul>
    </>
  );
};

export default ListProducts;
