import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';



// State - object
// Combine all small Reducers into Root Reducers
export default combineReducers({
    user: userReducer
});