import { createStore, combineReducers } from 'redux'


const rootReducers = combineReducers({
    // auth
})

const InitialState = {}


const store = createStore(
    rootReducers,
    InitialState
)


