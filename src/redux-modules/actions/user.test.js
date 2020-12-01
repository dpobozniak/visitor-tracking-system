import * as actions from './user';

describe('user actions', () => {
  it('should create an action to register user', () => {
    const expectedAction = {
      type: actions.REGISTER_REQUEST,
    };

    expect(actions.registerUser()).toEqual(expectedAction);
  });

  it('should create an action to set message on failed registration', () => {
    const message = 'There was an error';
    const expectedAction = {
      type: actions.REGISTER_FAILURE,
      message,
    };

    expect(actions.registerUserFailed(message)).toEqual(expectedAction);
  });

  it('should create an action to set data on successed registration', () => {
    const savedUserData = {
      id: '1234',
      firstName: 'First Name',
      lastName: 'Last Name',
    };
    const expectedAction = {
      type: actions.REGISTER_SUCCESS,
      savedUserData,
    };

    expect(actions.registerUserSuccessed(savedUserData)).toEqual(expectedAction);
  });
});
