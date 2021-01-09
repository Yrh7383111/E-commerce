import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./root-saga";



// Saga middleware for Action object after reducer
const sagaMiddleware = createSagaMiddleware();

// Middleware between Action and Reducer
// thunk - catch function
const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === 'development')
    middlewares.push(logger);

// Store object which holds all the states
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Run root saga middleware
sagaMiddleware.run(rootSaga);

// Redux browser Local Storage
export const persistor = persistStore(store);