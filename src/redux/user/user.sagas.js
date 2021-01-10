import { takeLatest, put, all, call } from 'redux-saga/effects';
import { UserActionTypes } from './user.types';
import { auth, createUserProfileDocument, googleAuthProvider } from "../../firebase/firebase.utils";
import { signInFailure, signInSuccess } from "./user.actions";



// Generator function
// Return a generator object
// yield - wait until complete, like await
export function* getUserSnapshot(user)
{
    try
    {
        const userReference = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userReference.get();

        yield put(signInSuccess(({ id: userSnapshot.id, ...userSnapshot.data() })))
    }
    catch(error)
    {
        // put - saga dispatch
        yield put(signInFailure(error.message));
    }
}

// Generator function
// Return a generator object
// yield - wait until complete, like await
export function* googleSignIn()
{
    try
    {
        const { user } = yield auth.signInWithPopup(googleAuthProvider);
        getUserSnapshot(user);
    }
    catch(error)
    {
        // put - saga dispatch
        yield put(signInFailure(error.message));
    }
}

// Generator function
// Return a generator object
// yield - wait until complete, like await
// yield - wait until complete, like await
// googleSignInStart generator takes in the Action object returned from UserActionTypes.GOOGLE_SIGN_IN_START
export function* googleSignInStart()
{
    // takeLatest - cancel all the generator functions except the last
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

// Generator function
// Return a generator object
// yield - wait until complete, like await
export function* emailSignIn({ payload: { email, password } })
{
    try
    {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        getUserSnapshot(user);
    }
    catch(error)
    {
        // put - saga dispatch
        yield put(signInFailure(error.message));
    }
}

// Generator function
// Return a generator object
// yield - wait until complete, like await
// emailSignIn generator takes in the Action object returned from UserActionTypes.EMAIL_SIGN_IN_START
export function* emailSignInStart()
{
    // takeLatest - cancel all the generator functions except the last
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignIn);
}



// Combine all sagas into one saga
export function* userSagas() {
    yield all([
      call(googleSignInStart),
      call(emailSignInStart)
    ]);
}