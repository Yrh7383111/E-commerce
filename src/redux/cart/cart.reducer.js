import { CartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";



// Initial state of hidden
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};


// Return an object
// currentState - cart object
// Action - { type: string , payload: any }
const cartReducer = (currentState = INITIAL_STATE, action) => {
    const type = action.type;

    if (type === CartActionTypes.TOGGLE_CART_HIDDEN)
    {
        return {
            // The order matters!!!
            // Spread (Keep) all the properties in cart
            ...currentState,
            // Overwrite hidden property
            hidden: !currentState.hidden
        };
    }
    else if (type === CartActionTypes.ADD_ITEM)
    {
        return {
            // The order matters!!!
            // Spread (Keep) all the properties in cart
            ...currentState,
            // Spread (Keep) all the existing cart items and add the new one
            cartItems: addItemToCart(currentState.cartItems, action.payload)
        };
    }
    else if (type === CartActionTypes.CLEAR_ITEMS)
    {
        return {
            // The order matters!!!
            // Spread (Keep) all the properties in cart
            ...currentState,
            // Filter out cartItem that was cleared
            cartItems: currentState.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
        };
    }
    // Default state
    else {
        return currentState;
    }
};



export default cartReducer;