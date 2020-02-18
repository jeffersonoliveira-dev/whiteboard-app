import React from 'react'
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import { AuthContext, ValueProp, initialStateProps } from '../index'
import {
  USER_LOADED,
  USER_LOADING,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS
} from './types'

const { useContext } = React
const config: HeadersProps = {
  headers: {
    'Content-Type': 'application/json'
  }
}

interface ConfigProps {
  config: HeadersProps
}

interface HeadersProps {
  headers: object
}

interface ServerResponse {
  data: ServerData
}

interface ServerData {
  data: object
}

interface dataObject {
  username: string
  password: string
  email: string
}

export const loadUser = (getToken: object) => {
  const { dispatch } = useContext<ValueProp | any>(AuthContext)

  dispatch({ type: USER_LOADING })

  axios.get('/api/auth/user', getToken).then((res: ServerResponse) => {
    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  })
}

export const login = (username: string, password: string) => {
  const { dispatch } = useContext<ValueProp>(AuthContext)
  const body: string = JSON.stringify({ username, password })

  axios.post('/api/auth/login', body, config).then(res => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })
  })
}

export const register = (data: dataObject) => {
  const { dispatch } = useContext<ValueProp>(AuthContext)
  const { username, password, email } = data
  const body: string = JSON.stringify({ username, password, email })

  axios.post('/api/auth/register', body, config).then(res => {
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })
  })
}

export const tokenConfig = () => {
  const { state } = useContext<ValueProp>(AuthContext)
  const token: string = state.token

  if (token) {
    const newConfig: HeadersProps = {
      headers: {
        Authorization: `Token ${token}`
      }
    }
    return newConfig
  }

  return config
}
