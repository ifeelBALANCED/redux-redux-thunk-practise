import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { countReducer } from './countReducer';
import { userReducer } from './userReducer';


export const rootReducer = combineReducers({
   count: countReducer,
   users: userReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
