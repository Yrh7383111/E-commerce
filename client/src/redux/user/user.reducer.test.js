import { UserActionTypes } from './user.types';
import userReducer from './user.reducer';


const initialState = {
    currentUser: null,
    errorMessage: undefined
};


describe('userReducer', () => {
    test('should return initial state', () => {
        expect(userReducer(undefined, {})).toEqual(initialState);
    });

    test('should set currentUser to payload on signInSuccess action', () => {
        const mockUser = { id: 1, displayName: 'Yihua' };

        expect(
            userReducer(initialState, {
                type: UserActionTypes.SIGN_IN_SUCCESS,
                payload: mockUser
            }).currentUser
        ).toEqual(mockUser);
    });

    test('should set currentUser to null on signOutSuccess action', () => {
        expect(
            userReducer(initialState, {
                type: UserActionTypes.SIGN_OUT_SUCCESS
            }).currentUser
        ).toBe(null);
    });

    test('should set errorMessage to payload on signInFailure, signUpFailure, signOutFailure action', () => {
        const mockError = {
            message: 'errored',
            code: 404
        };

        expect(
            userReducer(initialState, {
                type: UserActionTypes.SIGN_IN_FAILURE,
                payload: mockError
            }).errorMessage
        ).toBe(mockError);

        expect(
            userReducer(initialState, {
                type: UserActionTypes.SIGN_UP_FAILURE,
                payload: mockError
            }).errorMessage
        ).toBe(mockError);

        expect(
            userReducer(initialState, {
                type: UserActionTypes.SIGN_OUT_FAILURE,
                payload: mockError
            }).errorMessage
        ).toBe(mockError);
    });
});
