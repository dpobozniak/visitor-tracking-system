import React from 'react';
import { shallow, mount } from 'enzyme';

import ErrorBoundary from './ErrorBoundary';

const DummyComponent = () => (
  <h2>
    Dummy component
  </h2>
);

function ProblemChild() {
  throw new Error('Error thrown from problem child');
  return <div>Error</div>; // eslint-disable-line
}

describe('<ErrorBoundary />', () => {
  it('renders the child component when no error', () => {
    const wrapper = shallow(
      <ErrorBoundary>
        <DummyComponent />
      </ErrorBoundary>,
    );

    expect(wrapper.find(DummyComponent).length).toBe(1);
  });

  it('renders the error screen when state.hasError=true', () => {
    const wrapper = shallow(
      <ErrorBoundary>
        <DummyComponent />
      </ErrorBoundary>,
    );

    wrapper.setState({ hasError: true });
    expect(wrapper.contains('Something went wrong')).toBe(true);
  });

  it('displays error message on error generated by child', () => {
    const spiedGetDerivedStateFromError = jest.spyOn(ErrorBoundary, 'getDerivedStateFromError');

    mount(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>,
    );

    expect(spiedGetDerivedStateFromError).toHaveBeenCalledTimes(1);
  });
});
