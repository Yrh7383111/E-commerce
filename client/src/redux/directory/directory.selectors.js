import { createSelector } from 'reselect';


// Caching - Memoization

// Retrieve directory property from store
const selectDirectory = state => state.directory;


// Retrieve sections from directory
// Caching - Memoization
// If state.directory doesn't change, memoize output selector
export const selectDirectorySections = createSelector(
    // Input selector
    [selectDirectory],
    // Output selector
    directory => directory.sections
);