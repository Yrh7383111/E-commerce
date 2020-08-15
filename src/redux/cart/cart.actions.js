import { CartActionTypes } from "./cart.types";



// Return an Action object with modified user property
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});