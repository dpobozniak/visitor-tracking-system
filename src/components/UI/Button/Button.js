import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

/* eslint-disable react/button-has-type */
const Button = ({ type, children }) => (
  <button className="button" type={type}>
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button']),
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
