export interface initialState {
    token: string,
    isAuthenticated: boolean | null,
    user: null | object
}

const initialState:initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    user: null 
}

export function authReducer(state = initialState, action: object) {
    // resume actions
}