import React from 'react';
import PropTypes from 'prop-types';
import { ProductShape } from 'types';

const SingleProduct = ({ productData: { pid, name, price, max, min }, ...props }) => {
  const formatPrice = (price) => price.toString().replace('.', ',');

  return (
    <ul {...props} key={`pid-${pid}`}>
      <li className="row">{`${name}, cena: ${formatPrice(price)}zł`}</li>
    </ul>
  );
};

SingleProduct.propTypes = {
  productData: PropTypes.shape(ProductShape),
};

export default SingleProduct;
