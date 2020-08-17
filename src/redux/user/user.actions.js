import { UserActionTypes } from "./user.types";



// Return an Action object that tells User Reducer to set currentUser
export const setCurrentUser = currentUser => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: currentUser
});