import { createSelector } from 'reselect';



// Caching - Memoization

// Retrieve user property from store
const selectUser = state => state.user;

// Retrieve currentUser from user
export const selectCurrentUser = createSelector(
    // Input selector
    [selectUser],
    // Output
    user => user.currentUser
);