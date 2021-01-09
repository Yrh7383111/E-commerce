import { UserActionTypes } from "./user.types";



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

    // Sign-in is successful
    if (type === UserActionTypes.GOOGLE_SIGN_IN_SUCCESS ||
                 UserActionTypes.EMAIL_SIGN_IN_SUCCESS)
    {
        return {
            // The order matters!!!
            // Spread (Keep) all the properties in user
            ...currentState,
            // Overwrite currentUser property
            currentUser: action.payload,
            errorMessage: null
        };
    }
    // Sign-in is failure
    if (type === UserActionTypes.GOOGLE_SIGN_IN_FAILURE ||
                 UserActionTypes.EMAIL_SIGN_IN_FAILURE)
    {
        return {
            // The order matters!!!
            // Spread (Keep) all the properties in user
            ...currentState,
            // Overwrite currentUser property
            errorMessage: action.payload
        };
    }
    // Default state - the same with currentUser as null
    else {
        return currentState;
    }
};



export default userReducer;