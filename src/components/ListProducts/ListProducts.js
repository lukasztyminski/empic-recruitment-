import React, { useEffect, useState } from 'react';
import { useProducts } from 'hooks/useProducts';
import SingleProduct from 'components/SingleProduct/SingleProduct';

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const { getProducts } = useProducts();

  useEffect(() => {
    (async () => {
      const products = await getProducts();
      setProducts(products);
    })();
  }, [getProducts]);

  return (
    <div>
      <h3>Lista produktów</h3>
      {products.map((productData) => (
        <SingleProduct key={productData.pid} productData={productData} />
      ))}
    </div>
  );
};

export default ListProducts;
