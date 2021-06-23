import React from 'react';
import PropTypes from 'prop-types';
import { ProductShape } from 'types';

const SingleProduct = ({ productData: { pid, name, price }, ...props }) => {
  const formatPrice = (price) => price.toString().replace('.', ',');

  return (
    <li {...props} key={`pid-${pid}`} className="row">
      {name}, cena: <strong>{formatPrice(price)}zł</strong>
    </li>
  );
};

SingleProduct.propTypes = {
  productData: PropTypes.shape(ProductShape),
};

export default SingleProduct;
