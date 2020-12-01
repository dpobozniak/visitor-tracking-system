import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../UI/FormInput/FormInput';
import Message from '../UI/Message/Message';
import Button from '../UI/Button/Button';

const Form = ({ onSubmit, successMessage, errorMessage }) => {
  const [values, setValues] = useState({ firstName: '', lastName: '' });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(values);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h3>User registration</h3>
      {
        errorMessage
        && (
          <Message type="error">
            {errorMessage}
          </Message>
        )
      }

      {
        successMessage
        && (
          <Message type="success">
            {successMessage}
          </Message>
        )
      }

      <p>
        <label htmlFor="ffirstname">
          First name:
          <Input type="text" name="firstName" id="ffirstname" required value={values.firstName} onChange={handleInputChange} />
        </label>
      </p>
      <p>
        <label htmlFor="flastname">
          Last name:
          <Input type="text" name="lastName" id="flastname" required value={values.lastName} onChange={handleInputChange} />
        </label>
      </p>
      <Button type="submit">Send</Button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  successMessage: PropTypes.string,
  errorMessage: PropTypes.string,
};

Form.defaultProps = {
  successMessage: '',
  errorMessage: '',
};

export default Form;
