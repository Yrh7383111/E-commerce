import { CartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";



// Initial state of hidden
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
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
    else if (type === CartActionTypes.ADD_ITEM)
    {
        return {
            // The order matters!!!
            // Spread (Keep) all the states
            ...currentState,
            // Spread (Keep) all the existing cart items and add the new one
            cartItems: addItemToCart(currentState.cartItems, action.payload)
        };
    }
    // Default state - the same with hidden as true
    else {
        return currentState;
    }
};



export default cartReducer;