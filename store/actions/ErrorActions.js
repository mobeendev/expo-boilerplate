import { GLOBAL_ERROR_SET, SIGNIN_ERROR_SET, SIGNUP_ERRORS_SET } from './ActionTypes';

export const setGlobalError = payload => {
  return {
    type: GLOBAL_ERROR_SET,
    payload
  };
};

export const setSignInError = payload => {
  return {
    type: SIGNIN_ERROR_SET,
    payload
  };
};

export const setSignUpErrors = payload => {
  return {
    type: SIGNUP_ERRORS_SET,
    payload
  };
};
