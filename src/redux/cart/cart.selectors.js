import { createSelector } from 'reselect';



// Caching - Memoization

// Retrieve cart property from store
const selectCart = state => state.cart;

// Retrieve cartItems from cart
export const selectCartItems = createSelector(
    // Input selector
    [selectCart],
    // Output
    cart => cart.cartItems
);

// Retrieve cartItems from cart
export const selectCartHidden = createSelector(
    // Input selector
    [selectCart],
    // Output
    cart => cart.hidden
);

// Calculate total number of quantities from cartItems
export const selectCartItemsCount = createSelector(
    // Input selector
  [selectCartItems],
    // Output
  cartItems => cartItems.reduce((totalQuantity, cartItem) => totalQuantity + cartItem.quantity, 0)
);

// Calculate total price from cartItems
export const selectCartTotal = createSelector(
    // Input selector
    [selectCartItems],
    // Output
    cartItems => cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
);