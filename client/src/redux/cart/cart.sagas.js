import { takeLatest, put, all, call } from 'redux-saga/effects';
import { UserActionTypes } from "../user/user.types";
import { clearCart } from "./cart.actions";


// Generator function
// Return a generator object
// yield - wait until complete, like await
export function* clearCartSignOut() {
    yield put(clearCart());
}

// Generator function - return a generator object
// yield - wait until complete, like await
// Listen for EMAIL_SIGN_IN_START Action
// Pass returned Action object from SIGN_OUT_SUCCESS, and call clearCartSignOut Saga
export function* cleanCartSignOutStart() {
    // takeLatest - cancel all the generator functions except the last
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartSignOut);
}

// Combine all sagas into one saga
export function* cartSagas() {
    yield all([
        call(cleanCartSignOutStart)
    ]);
}