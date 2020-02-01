import { Action, Reducer, Dispatch } from 'redux'

export interface InitialState {

}

export const InitialState : InitialState = {

}

export interface DispatchAction extends Action{
  payload: Partial<InitialState>
}

export enum ActionType {
  // types
}

export const rootReducer: Reducer<InitialState, DispatchAction> = ( state, action ) => {
  return InitialState
}

export class rootDispatcher {
  private readonly dispatch: Dispatch<DispatchAction>
  // redux methods
}
