import { takeLatest, put, all, call } from 'redux-saga/effects';
import { UserActionTypes } from './user.types';
import {googleSignInFailure, googleSignInSuccess} from "./user.actions";
import {auth, createUserProfileDocument, googleAuthProvider} from "../../firebase/firebase.utils";



// Generator function
// Return a generator object
// yield - wait until complete, like await
export function* googleSignIn()
{
    try
    {
        const { user } = yield auth.signInWithPopup(googleAuthProvider);
        const userReference = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userReference.get();

        yield put(googleSignInSuccess(({ id: userSnapshot.id, ...userSnapshot.data() })))
    }
    catch(error)
    {
        // put - saga dispatch
        yield put(googleSignInFailure(error.message));
    }
}

// Generator function
// Return a generator object
// yield - wait until complete, like await
export function* googleSignInStart()
{
    // takeLatest - cancel all the generator functions except the last
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}



// Combine all sagas into one saga
export function* userSagas() {
    yield all([
        call(googleSignInStart)
    ]);
}