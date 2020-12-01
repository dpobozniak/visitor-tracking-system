import React from 'react';
import PropTypes from 'prop-types';

import './formInput.scss';

const FormInput = ({
  type, name, id, required, value, onChange,
}) => (
  <input className="form-input" type={type} name={name} id={id} required={required} value={value} onChange={onChange} />
);

FormInput.propTypes = {
  type: PropTypes.oneOf(['text']),
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

FormInput.defaultProps = {
  type: 'text',
  required: false,
};

export default FormInput;
