import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import cartReducer from "./cart/cart.reducer";



// State - object
// Combine all small Reducers into Root Reducers
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

// Redux browser Local Storage configuration
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};



export default persistReducer(persistConfig, rootReducer);