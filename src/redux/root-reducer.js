import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from "./cart/cart.reducer";



// State - object
// Combine all small Reducers into Root Reducers
export default combineReducers({
    user: userReducer,
    cart: cartReducer
});