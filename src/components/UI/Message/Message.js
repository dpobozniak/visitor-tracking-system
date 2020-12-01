import React from 'react';
import PropTypes from 'prop-types';

import './message.scss';

const Message = ({ type, children }) => (
  <p className={`message message__${type}`}>
    {children}
  </p>
);

Message.propTypes = {
  type: PropTypes.oneOf(['success', 'error']),
  children: PropTypes.string.isRequired,
};

Message.defaultProps = {
  type: 'success',
};

export default Message;
