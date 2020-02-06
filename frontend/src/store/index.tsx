import { authReducer } from './user/reducers'
import * as React from 'react'

interface initialState {
  token: string
  isAuthenticated: boolean | null
  isLoading: boolean
  user: null | object
}

export const initialState: initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null
}

interface ChildrenProps {
  children?: React.ReactChildren
}

export const authContext = React.createContext(initialState)

export const authProvider: React.FunctionComponent<ChildrenProps> = children => {
  const [state, dispatch] = React.useReducer(authReducer, initialState)
  return (
    <authContext.Provider value={{ state, dispatch }}>
      {children}
    </authContext.Provider>
  )
}

// fix this
