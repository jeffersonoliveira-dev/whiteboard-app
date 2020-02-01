import {
  rootReducer,
  InitialState,
  DispatchAction,
} from '../redux/reducers/root-reducer'
import { createStore } from 'redux'

export const store = createStore<InitialState, DispatchAction, null, null>(
  rootReducer
)
