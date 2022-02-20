import { createSelector } from 'reselect';


// Caching - Memoization

// Retrieve cart property from store
const selectCart = state => state.cart;


// Retrieve cartItems from cart
// Caching - Memoization
// If state.cart doesn't change, memoize output selector
export const selectCartItems = createSelector(
    // Input selector
    [selectCart],
    // Output selector
    cart => cart.cartItems
);

// Retrieve cartItems from cart
// Caching - Memoization
// If state.cart doesn't change, memoize output selector
export const selectCartHidden = createSelector(
    // Input selector
    [selectCart],
    // Output selector
    cart => cart.hidden
);


// Calculate total number of quantities from cartItems
// Caching - Memoization
// If state.cart doesn't change, memoize output selector
export const selectCartItemsCount = createSelector(
    // Input selector
  [selectCartItems],
    // Output selector
  cartItems => cartItems.reduce((totalQuantity, cartItem) => totalQuantity + cartItem.quantity, 0)
);

// Calculate total price from cartItems
// Caching - Memoization
// If state.cart doesn't change, memoize output selector
export const selectCartItemsTotal = createSelector(
    // Input selector
    [selectCartItems],
    // Output selector
    cartItems => cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
);