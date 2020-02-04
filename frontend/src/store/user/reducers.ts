import { USER_LOADED, USER_LOADING, LOGIN_SUCCESS, REGISTER_SUCCESS, AUTH_ERROR, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_FAIL } from "./types";

export interface initialState {
    token: string,
    isAuthenticated: boolean | null,
    isLoading: boolean,
    user: null | object
}

const initialState:initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user: null 
}

export function authReducer(state = initialState, action: object) {
    // resume actions
    switch(action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case LOGIN_SUCCESS:
            case REGISTER_SUCCESS:
                localStorage.setItem("token", action.payload.token)
                return {
                    ...state,
                    ...action.payload,
                    isAuthenticated: true,
                    isLoading: false
                }
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            localStorage.removeItem("token")
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            }
        default:
            return state

    }

}