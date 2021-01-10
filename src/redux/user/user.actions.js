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