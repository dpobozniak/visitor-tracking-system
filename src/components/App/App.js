import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { registerUser } from '../../redux-modules/actions/user';
import { getUsers, getRegistrationErrorMessage, getRegisteredUser } from '../../redux-modules/reducers/user';

import './styles.scss';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import RegisterForm from '../RegisterForm/RegisterForm';

const App = ({ onRegisterUser, registeredUser, registrationErrorMessage }) => (
  <ErrorBoundary>
    <div className="wrapper">
      <RegisterForm
        onSubmit={onRegisterUser}
        successMessage={registeredUser.id && `User has been registered with card ID: ${registeredUser.id}`}
        errorMessage={registrationErrorMessage}
      />
    </div>
  </ErrorBoundary>
);

App.propTypes = {
  onRegisterUser: PropTypes.func.isRequired,
  registeredUser: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  registrationErrorMessage: PropTypes.string,
};

App.defaultProps = {
  registrationErrorMessage: '',
};

const mapStateToProps = (state) => (
  {
    usersList: getUsers(state),
    registeredUser: getRegisteredUser(state),
    registrationErrorMessage: getRegistrationErrorMessage(state),
  }
);

const mapDispatchToProps = ({
  onRegisterUser: registerUser,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
