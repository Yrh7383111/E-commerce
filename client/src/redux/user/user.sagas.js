import { takeLatest, put, all, call } from 'redux-saga/effects';
import { UserActionTypes } from './user.types';
import { auth, createUserProfileDocument, getCurrentUser, googleAuthProvider } from "../../firebase/firebase.utils";
import {
    signInFailure,
    signInSuccess,
    signOutSuccess,
    signOutFailure,
    signUpSuccess,
    signUpFailure
} from "./user.actions";


// Generator function
// Return a generator object
// yield - wait until complete, like await
export function* getUserSnapshot(user, additionalData) {
    try {
        const userReference = yield call(createUserProfileDocument, user, additionalData)
        const userSnapshot = yield userReference.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    }
    catch(error) {
        // put - saga dispatch
        yield put(signInFailure(error.message));
    }
}

// Generator function
// Return a generator object
// yield - wait until complete, like await
export function* googleSignIn() {
    try {
        const { user } = yield auth.signInWithPopup(googleAuthProvider);
        yield getUserSnapshot(user);
    }
    catch(error) {
        // put - saga dispatch
        yield put(signInFailure(error.message));
    }
}

// Generator function - return a generator object
// yield - wait until complete, like await
// Listen for GOOGLE_SIGN_IN_START Action
// Pass returned Action object from GOOGLE_SIGN_IN_START, and call googleSignIn Saga
export function* googleSignInStart() {
    // takeLatest - cancel all the generator functions except the last
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

// Generator function
// Return a generator object
// yield - wait until complete, like await
export function* emailSignIn({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getUserSnapshot(user);
    }
    catch(error) {
        // put - saga dispatch
        yield put(signInFailure(error.message));
    }
}

// Generator function - return a generator object
// yield - wait until complete, like await
// Listen for EMAIL_SIGN_IN_START Action
// Pass returned Action object from EMAIL_SIGN_IN_START, and call emailSignIn Saga
export function* emailSignInStart() {
    // takeLatest - cancel all the generator functions except the last
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

// Generator function - return a generator object
// yield - wait until complete, like await
export function* isCurrentUserAuthenticated() {
    try {
        const user = yield getCurrentUser();
        if (!user) {
            return;
        }
        // Else
        yield getUserSnapshot(user);
    }
    catch (error) {
        yield put(signInFailure(error.message));
    }
}

// Generator function - return a generator object
// yield - wait until complete, like await
// Listen for CHECK_CURRENT_USER Action
// Pass returned Action object returned from CHECK_CURRENT_USER, and call isCurrentUserAuthenticated Saga
export function* checkCurrentUserStart() {
    // takeLatest - cancel all the generator functions except the last
    yield takeLatest(UserActionTypes.CHECK_CURRENT_USER, isCurrentUserAuthenticated);
}

// Generator function
// Return a generator object
// yield - wait until complete, like await
export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    }
    catch(error) {
        // put - saga dispatch
        yield put(signOutFailure(error.message));
    }
}

// Generator function - return a generator object
// yield - wait until complete, like await
// Listen for SIGN_OUT_START Action
// Pass returned Action object from SIGN_OUT_START, and call signOut Saga
export function* signOutStart() {
    // takeLatest - cancel all the generator functions except the last
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

// Generator function
// Return a generator object
// yield - wait until complete, like await
// Receive returned Action object from SIGN_UP_START
export function* signUp({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({ user: user, additionalData: { displayName: displayName } }));
    }
    catch(error) {
        // put - saga dispatch
        yield put(signUpFailure(error.message));
    }
}

// Generator function - return a generator object
// yield - wait until complete, like await
// Listen for SIGN_UP_START Action
// Pass returned Action object from SIGN_UP_START, and call signUp Saga
export function* signUpStart() {
    // takeLatest - cancel all the generator functions except the last
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

// Generator function
// Return a generator object
// yield - wait until complete, like await
// Receive returned Action object from SIGN_UP_START
export function* signInAfterSignUp({ payload: { user, additionalData } }) {
    try {
        yield getUserSnapshot(user, additionalData);
    }
    catch (error) {
        yield put(signInFailure(error.message))
    }
}

// Generator function - return a generator object
// yield - wait until complete, like await
// Listen for SIGN_UP_SUCCESS Action
// Pass returned Action object from SIGN_UP_SUCCESS, and call signInAfterSignUp Saga
export function* signInAfterSignUpStart() {
    // takeLatest - cancel all the generator functions except the last
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}


// Combine all sagas into one saga
export function* userSagas() {
    yield all([
        call(googleSignInStart),
        call(emailSignInStart),
        call(checkCurrentUserStart),
        call(signOutStart),
        call(signUpStart),
        call(signInAfterSignUpStart)
    ]);
}