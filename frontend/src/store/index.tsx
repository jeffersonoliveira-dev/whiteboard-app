// eslint-disable-next-line no-unused-vars
import { authReducer, ActionProps } from './user/reducers'
import * as React from 'react'

export interface initialStateProps {
  token: string
  isAuthenticated: boolean | null
  isLoading: boolean
  user: null | object
}

export const initialState: initialStateProps = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null
}

export interface ValueProp {
  state: initialStateProps
  dispatch: (action: ActionProps) => void
}

export const AuthContext = React.createContext<initialStateProps | any>(
  initialState
)

interface childrenProps {
  children?: React.ReactNode
}

export const AuthProvider: React.FC<childrenProps> = props => {
  const [state, dispatch] = React.useReducer<ValueProp | any>(
    authReducer,
    initialState
  )
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  )
}
