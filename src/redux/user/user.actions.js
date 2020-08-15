import { UserActionTypes } from "./user.types";



// Return an Action object with modified user property
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});