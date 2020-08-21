import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';



// Middleware between Action and Reducer
const middlewares = [];
if (process.env.NODE_ENV === 'development')
    middlewares.push(logger);

// Store object which holds all the states
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Redux browser Local Storage
export const persistor = persistStore(store);