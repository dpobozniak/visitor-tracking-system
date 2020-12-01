import React from 'react';
import PropTypes from 'prop-types';

import './ErrorBoundary.scss';

class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {
    hasError: false,
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <div className="error-screen wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="error-screen__icon">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          <h2 className="error-screen__title">
            <span>
              Oops
            </span>
            Something went wrong
          </h2>
          <p>
            <a className="button" href="/">
              Back to home
            </a>
          </p>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
