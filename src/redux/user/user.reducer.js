import { UserActionTypes } from "./user.types";



// Initial state of currentUser
const INITIAL_STATE = {
    currentUser: null
};


// Return an object
// Action - { type: string , payload: any }
const userReducer = (currentState = INITIAL_STATE, action) => {
    const type = action.type;

    // Change the currentUser
    if (type === UserActionTypes.SET_CURRENT_USER)
    {
        return {
            // The order matters!!!
            // Spread (Keep) all the states
            ...currentState,
            // Overwrite currentUser state
            currentUser: action.payload
        };
    }
    // Default state - the same with currentUser as null
    else {
        return currentState;
    }
};



export default userReducer;