import { takeLatest, put, all, call } from 'redux-saga/effects';
import { UserActionTypes } from './user.types';
import { auth, createUserProfileDocument, getCurrentUser, googleAuthProvider } from "../../firebase/firebase.utils";
import { signInFailure, signInSuccess, signOutSuccess, signOutFailure} from "./user.actions";



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
        yield getUserSnapshot(user);
    }
    catch(error)
    {
        // put - saga dispatch
        yield put(signInFailure(error.message));
    }
}

// Generator function - return a generator object
// yield - wait until complete, like await
// Listen for UserActionTypes.GOOGLE_SIGN_IN_START Action
// And call googleSignIn Saga
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
        yield getUserSnapshot(user);
    }
    catch(error)
    {
        // put - saga dispatch
        yield put(signInFailure(error.message));
    }
}

// Generator function - return a generator object
// yield - wait until complete, like await
// Listen for UserActionTypes.EMAIL_SIGN_IN_START Action
// And call emailSignIn Saga
export function* emailSignInStart()
{
    // takeLatest - cancel all the generator functions except the last
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

// Generator function - return a generator object
// yield - wait until complete, like await
export function* isCurrentUserAuthenticated()
{
    try
    {
        const user = yield getCurrentUser();
        if (!user)
            return;
        // Else
        yield getUserSnapshot(user);
    }
    catch (error)
    {
        yield put(signInFailure(error.message));
    }
}

// Generator function - return a generator object
// yield - wait until complete, like await
// Listen for UserActionTypes.CHECK_CURRENT_USER Action
// And call isCurrentUserAuthenticated Saga
export function* checkCurrentUserStart()
{
    // takeLatest - cancel all the generator functions except the last
    yield takeLatest(UserActionTypes.CHECK_CURRENT_USER, isCurrentUserAuthenticated);
}

// Generator function
// Return a generator object
// yield - wait until complete, like await
export function* signOut()
{
    try
    {
        yield auth.signOut();
        yield put(signOutSuccess());
    }
    catch(error)
    {
        // put - saga dispatch
        yield put(signOutFailure(error.message));
    }
}

// Generator function - return a generator object
// yield - wait until complete, like await
// Listen for UserActionTypes.SIGN_OUT_START Action
// And call signOut Saga
export function* signOutStart()
{
    // takeLatest - cancel all the generator functions except the last
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}



// Combine all sagas into one saga
export function* userSagas() {
    yield all([
      call(googleSignInStart),
      call(emailSignInStart),
      call(checkCurrentUserStart),
      call(signOutStart)
    ]);
}