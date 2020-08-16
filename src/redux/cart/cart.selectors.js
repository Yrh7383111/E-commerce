import { createSelector } from 'reselect';



// Caching - Memoization

// Retrieve cart property from store
export const selectCart = state => state.cart;

// Retrieve cartItems from cart
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

// Calculate total number of quantities from cartItems
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((totalQuantity, cartItem) => totalQuantity + cartItem.quantity, 0)
);