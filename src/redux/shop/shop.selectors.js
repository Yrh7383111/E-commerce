import { createSelector } from 'reselect';



// Caching - Memoization

// Retrieve shop property from store
const selectShop = state => state.shop;


// Retrieve sections from directory
export const selectCollections = createSelector(
    // Input selector
    [selectShop],
    // Output
    shop => shop.collections
);