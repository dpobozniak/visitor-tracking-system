import {
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE,
} from '../actions/user';

const initialState = {
  users: [],
  user: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    // Register
    case REGISTER_REQUEST:
      return {
        ...state,
        user: {},
        registerErrorMessage: '',
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.savedUserData,
        users: [
          ...state.users,
          action.savedUserData,
        ],
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        registerErrorMessage: action.message,
      };
    default:
      return state;
  }
};

export const getUsers = (state) => state.user.users;
export const getRegisteredUser = (state) => state.user.user;
export const getRegistrationErrorMessage = (state) => state.user.registerErrorMessage;

export default user;
