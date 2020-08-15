import { CartActionTypes } from "./cart.types";



// Return an Action object with modified hidden property
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

// Return an Action object with modified cartItem property
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});