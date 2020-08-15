import { CartActionTypes } from "./cart.types";



// Initial state of hidden
const INITIAL_STATE = {
  hidden: true
};


// Return an object
// Action - { type: string , payload: any }
const cartReducer = (currentState = INITIAL_STATE, action) => {
    const type = action.type;

    // Change the currentUser
    if (type === CartActionTypes.TOGGLE_CART_HIDDEN)
    {
        return {
            // The order matters!!!
            // Spread (Keep) all the states
            ...currentState,
            // Toggle hidden
            hidden: !currentState.hidden
        };
    }
    // Default state - the same with hidden as true
    else {
        return currentState;
    }
};



export default cartReducer;