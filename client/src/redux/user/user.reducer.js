import { UserActionTypes } from "./user.types";
import {User} from "firebase";


// Initial state of user state
const INITIAL_STATE = {
    currentUser: null,
    errorMessage: null
};


// Return an object
// currentState - user object
// Action - { type: string , payload: any }
const userReducer = (currentState = INITIAL_STATE, action) => {
    const type = action.type;

    // Success
    if (type === UserActionTypes.SIGN_IN_SUCCESS)
    {
        return {
            // The order matters!!!
            // Spread (Keep) all the properties in user
            ...currentState,
            currentUser: action.payload,
            errorMessage: null
        };
    }
    else if (type === UserActionTypes.SIGN_OUT_SUCCESS)
    {
        return {
            // The order matters!!!
            // Spread (Keep) all the properties in user
            ...currentState,
            currentUser: null,
            errorMessage: null
        };
    }
    // Failure
    else if (type === UserActionTypes.SIGN_IN_FAILURE ||
                      UserActionTypes.SIGN_OUT_FAILURE ||
                      UserActionTypes.SIGN_UP_FAILURE)
    {
        return {
            // The order matters!!!
            // Spread (Keep) all the properties in user
            ...currentState,
            errorMessage: action.payload
        };
    }
    // Default state - the same with currentUser as null
    else {
        return currentState;
    }
};



export default userReducer;