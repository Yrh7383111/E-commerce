import { createSelector } from 'reselect';



// Caching - Memoization

// Retrieve user property from store
const selectUser = state => state.user;


// Retrieve currentUser from user
// Caching - Memoization
// If state.user doesn't change, memoize output selector
export const selectCurrentUser = createSelector(
    // Input selector
    [selectUser],
    // Output selector
    user => user.currentUser
);