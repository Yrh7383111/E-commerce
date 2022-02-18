import { CartActionTypes } from "./cart.types";



// Return an Action object that tells Cart Reducer to toggle hidden
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

// Return an Action object that tells Cart Reducer to add a cartItem
export const addItem = cartItem => ({
    type: CartActionTypes.ADD_ITEM,
    payload: cartItem
});

// Return an Action object that tells Cart Reducer to decrease the quantity of a cartItem
export const removeItem = cartItem => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: cartItem
});

// Return an Action object that tells Cart Reduce to clear a cartItem
export const clearItems = cartItem => ({
    type: CartActionTypes.CLEAR_ITEMS,
    payload: cartItem
});

// Return an Action object that tells Cart Reduce to clear cart
export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART,
});