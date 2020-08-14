// Return an Action object with modified user property
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
});