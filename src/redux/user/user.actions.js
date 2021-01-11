import { UserActionTypes } from "./user.types";



// Return an Action object that tells User Reducer to start Google sign-in
export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

// Return an Action object that tells User Reducer to start email sign-in
export const emailSignInStart = emailAndPassword => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

// Return an Action object that tells User Reducer sign-in is successful
export const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

// Return an Action object that tells User Reducer sign-in is failure
export const signInFailure = errorMessage => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: errorMessage
});

// Return an Action object that tells User Reducer to check current user
export const checkCurrentUser = () => ({
    type: UserActionTypes.CHECK_CURRENT_USER
});

// Return an Action object that tells User Reducer to start sign-out
export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START,
});

// Return an Action object that tells User Reducer sign-out is successful
export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS,
});

// Return an Action object that tells User Reducer sign-out is failure
export const signOutFailure = errorMessage => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: errorMessage
});