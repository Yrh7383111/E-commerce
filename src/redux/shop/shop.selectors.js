import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';



// Caching - Memoization

// Retrieve shop property from store
const selectShop = state => state.shop;


// Retrieve collections from shop
// Caching - Memoization
// If state.shop doesn't change, memoize output selector
export const selectCollections = createSelector(
    // Input selector
    [selectShop],
    // Output selector
    shop => shop.collections
);


// Retrieve a specific collection based on URL parameter
// Currying function (nested function) - one function only takes one argument
// Caching - Memoization
// If collectionUrlParam was memoized before, return the memoized output selector
export const selectCollection = memoize(collectionUrlParam => createSelector(
    // Input selector
    [selectCollections],
    // Output selector
    collections => (collections ? collections[collectionUrlParam] : null)
));

// Return an array of collection objects
// Caching - Memoization
// If state.shop doesn't change, memoize output selector
export const selectCollectionForPreview = createSelector(
    // Input selector
    [selectCollections],
    // Output selector
    // Object.keys(object) - convert an object to an array
    collections => (collections ? Object.keys(collections).map(key => collections[key]) : [])
);