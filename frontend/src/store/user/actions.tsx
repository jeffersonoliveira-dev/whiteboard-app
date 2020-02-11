import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types'

export const userLoaded = (payload: object) => {
  return {
    type: USER_LOADED,
    payload: payload
  }
}

// actions here
