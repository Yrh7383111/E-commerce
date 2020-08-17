import { createSelector } from 'reselect';



// Caching - Memoization

// Retrieve directory property from store
const selectDirectory = state => state.directory;


// Retrieve sections from
export const selectDirectorySections = createSelector(
    // Input selector
    [selectDirectory],
    // Output
    directory => directory.sections
);