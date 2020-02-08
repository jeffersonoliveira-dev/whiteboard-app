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

interface ChildrenProps {
  children?: React.ReactChildren
}

interface ValueProp {
  state: object
  dispatch: (action: ActionProps) => void
}

export const authContext = React.createContext<ValueProp | initialStateProps>(
  initialState
)

export const authProvider: React.FunctionComponent<ChildrenProps> = children => {
  const [state, dispatch] = React.useReducer(authReducer, initialState)
  return (
    <authContext.Provider value={{ state, dispatch }}>
      {children}
    </authContext.Provider>
  )
}
