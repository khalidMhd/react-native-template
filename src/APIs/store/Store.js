import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { signinReducer } from '../reducer/Auth'
import * as SecureStore from 'expo-secure-store';

const reducer = combineReducers({
    userSignin: signinReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default Store