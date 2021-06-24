import React from 'react';

import ListProducts from 'components/ListProducts/ListProducts';
import Basket from 'components/Basket/Basket';
import TotalOrder from 'components/TotalOrder/TotalOrder';

const Root = () => {
  return (
    <div className="container">
      <ListProducts />
      <Basket />
      <TotalOrder />
    </div>
  );
};

export default Root;
