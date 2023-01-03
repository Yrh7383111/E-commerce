import { takeLatest, put, call } from 'redux-saga/effects';
import { UserActionTypes } from './user.types';
import {
    signInFailure,
    signOutSuccess,
    signOutFailure
} from './user.actions';
import {
    auth,
    createUserProfileDocument,
    getCurrentUser
} from '../../firebase/firebase.utils';
import {
    getUserSnapshot,
    googleSignIn,
    emailSignIn,
    isCurrentUserAuthenticated,
    signOut,
    signUp,
    signInAfterSignUp,
    googleSignInStart,
    emailSignInStart,
    checkCurrentUserStart,
    signOutStart,
    signUpStart,
    signInAfterSignUpStart
} from './user.sagas';


describe('on signup success saga', () => {
    test('should trigger on SIGN_UP_SUCCESS', () => {
        const generator = signInAfterSignUpStart();

        expect(generator.next().value).toEqual(
            takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
        );
    });
});

describe('on signup start saga', () => {
    test('should trigger on SIGN_UP_START', () => {
        const generator = signUpStart();

        expect(generator.next().value).toEqual(
            takeLatest(UserActionTypes.SIGN_UP_START, signUp)
        );
    });
});

describe('on signout start saga', () => {
    test('should trigger on SIGN_UP_START', () => {
        const generator = signOutStart();

        expect(generator.next().value).toEqual(
            takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
        );
    });
});

describe('on check user session saga', () => {
    test('should trigger on CHECK_USER_SESSION', () => {
        const generator = checkCurrentUserStart();

        expect(generator.next().value).toEqual(
            takeLatest(UserActionTypes.CHECK_CURRENT_USER, isCurrentUserAuthenticated)
        );
    });
});

describe('on email sign in start saga', () => {
    test('should trigger on EMAIL_SIGN_IN_START', () => {
        const generator = emailSignInStart();

        expect(generator.next().value).toEqual(
            takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignIn)
        );
    });
});

describe('on google sign in start saga', () => {
    test('should trigger on GOOGLE_SIGN_IN_START', () => {
        const generator = googleSignInStart();

        expect(generator.next().value).toEqual(
            takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn)
        );
    });
});

describe('on sign out saga', () => {
    const generator = signOut();


    test('should call auth.signOut', () => {
        const expectSignOut = jest.spyOn(auth, 'signOut');
        generator.next();

        expect(expectSignOut).toHaveBeenCalled();
    });

    test('should call signOutSuccess', () => {
        expect(generator.next().value).toEqual(put(signOutSuccess()));
    });
});

describe('is user authenticated saga', () => {
    const generator = isCurrentUserAuthenticated();


    test('should call getCurrentUser', () => {
        expect(generator.next().value).toEqual(getCurrentUser());
    });

    test('should call getUserSnapshot if userAuth exists', () => {
        const mockUserAuth = { uid: '123da' };

        expect(generator.next(mockUserAuth).value).toEqual(
            getUserSnapshot(mockUserAuth)
        );
    });
});

describe('get snapshot from userAuth', () => {
    const mockUserAuth = {};
    const mockAddtestionalData = {};
    const generator = getUserSnapshot(mockUserAuth, mockAddtestionalData);

    expect(generator.next().value).toEqual(
        call(createUserProfileDocument, mockUserAuth, mockAddtestionalData)
    );
});
