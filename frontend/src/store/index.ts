import { createStore, combineReducers } from 'redux'
import { authReducer } from './user/reducers'

const rootReducers = combineReducers({
  authReducer,
})

const InitialState = {}

export const store = createStore({
  rootReducers,
  InitialState,
})
