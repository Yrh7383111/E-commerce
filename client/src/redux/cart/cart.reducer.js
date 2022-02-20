import { CartActionTypes } from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";


// Initial state of cart state
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
    else if (type === CartActionTypes.REMOVE_ITEM)
    {
        return {
            // The order matters!!!
            // Spread (Keep) all the properties in cart
            ...currentState,
            // Spread (Keep) all the existing cart items and decrease the quantity
            cartItems: removeItemFromCart(currentState.cartItems, action.payload)
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
    else if (type === CartActionTypes.CLEAR_CART)
    {
        return {
            // The order matters!!!
            // Spread (Keep) all the properties in cart
            ...currentState,
            // Clear cartItems
            cartItems: []
        };
    }
    // Default state
    else {
        return currentState;
    }
};



export default cartReducer;