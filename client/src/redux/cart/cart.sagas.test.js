import { takeLatest, put } from 'redux-saga/effects';
import { UserActionTypes } from '../user/user.types';
import { clearCart } from './cart.actions';
import { clearCartSignOut, cleanCartSignOutStart } from './cart.sagas';

describe('on signout success saga', () => {
    test('should trigger on SIGN_OUT_SUCCESS', async () => {
        const generator = cleanCartSignOutStart();
        expect(generator.next().value).toEqual(
            takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartSignOut)
        );
    });
});

describe('clear cart on signout saga', () => {
    test('should fire clearCart', () => {
        const generator = clearCartSignOut();
        expect(generator.next().value).toEqual(put(clearCart()));
    });
});
