import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';



// Middleware between Action and Reducer
const middlewares = [logger];
// Store object which holds all the states
const store = createStore(rootReducer, applyMiddleware(...middlewares));



export default store;