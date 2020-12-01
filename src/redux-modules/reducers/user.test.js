import reducer from './user';
import * as types from '../actions/user';

describe('user reducer', () => {
  const initialState = {
    users: [],
    user: {},
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle REGISTER_SUCCESS', () => {
    const savedUserData = {
      firstName: 'John',
      lastName: 'Kowalski',
    };

    expect(reducer(initialState, {
      type: types.REGISTER_SUCCESS,
      savedUserData,
    })).toEqual({
      users: [
        {
          firstName: 'John',
          lastName: 'Kowalski',
        },
      ],
      user: {
        firstName: 'John',
        lastName: 'Kowalski',
      },
    });
  });

  it('should handle REGISTER_FAILURE', () => {
    const message = 'There was an error';

    expect(reducer(initialState, {
      type: types.REGISTER_FAILURE,
      message,
    })).toEqual({
      users: [],
      user: {},
      registerErrorMessage: message,
    });
  });
});
