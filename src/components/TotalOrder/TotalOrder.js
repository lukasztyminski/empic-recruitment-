import React, { useContext } from 'react';
import { Title } from 'components/Title/Title';
import { ProductsContext } from 'providers/ProductsProvider';
import { formatPrice } from 'helpers';

const TotalOrder = () => {
  const { totalOrderSum } = useContext(ProductsContext);

  return (
    <Title>
      Suma zamówienia: <strong>{formatPrice(totalOrderSum)}zł</strong>
    </Title>
  );
};

export default TotalOrder;
