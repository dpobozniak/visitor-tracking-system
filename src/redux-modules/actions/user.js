export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

// Register
export const registerUser = (userData) => ({
  type: REGISTER_REQUEST,
  userData,
});

export const registerUserSuccessed = (savedUserData) => ({
  type: REGISTER_SUCCESS,
  savedUserData,
});

export const registerUserFailed = (message) => ({
  type: REGISTER_FAILURE,
  message,
});
