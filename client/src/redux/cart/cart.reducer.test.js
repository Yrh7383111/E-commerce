import { CartActionTypes } from './cart.types';
import cartReducer from './cart.reducer';


const initialState = {
    hidden: true,
    cartItems: []
};

describe('cartReducer', () => {
    test('should return initial state', () => {
        expect(cartReducer(undefined, {})).toEqual(initialState);
    });

    test('should toggle hidden with toggleHidden action', () => {
        expect(
            cartReducer(initialState, { type: CartActionTypes.TOGGLE_CART_HIDDEN })
                .hidden
        ).toBe(false);
    });

    test('should increase quantity of matching item by 1 if addItem action fired with same item as payload', () => {
        const mockItem = {
            id: 1,
            quantity: 3
        };
        const mockPrevState = {
            hidden: true,
            cartItems: [mockItem, { id: 2, quantity: 1 }]
        };

        expect(
            cartReducer(mockPrevState, {
                type: CartActionTypes.ADD_ITEM,
                payload: mockItem
            }).cartItems[0].quantity
        ).toBe(4);
    });

    test('should decrease quantity of matching item by 1 if removeItem action fired with same item as payload', () => {
        const mockItem = {
            id: 1,
            quantity: 3
        };
        const mockPrevState = {
            hidden: true,
            cartItems: [mockItem, { id: 2, quantity: 1 }]
        };

        expect(
            cartReducer(mockPrevState, {
                type: CartActionTypes.REMOVE_ITEM,
                payload: mockItem
            }).cartItems[0].quantity
        ).toBe(2);
    });

    test('should remove item from cart if clearItemFromCart action fired with payload of existing item', () => {
        const mockItem = {
            id: 1,
            quantity: 3
        };
        const mockPrevState = {
            hidden: true,
            cartItems: [mockItem, { id: 2, quantity: 1 }]
        };

        expect(
            cartReducer(mockPrevState, {
                type: CartActionTypes.CLEAR_ITEMS,
                payload: mockItem
            }).cartItems.includes(item => item.id === 1)
        ).toBe(false);
    });

    test('should clear cart if clearCart action fired', () => {
        const mockPrevState = {
            hidden: true,
            cartItems: [{ id: 1, quantity: 3 }, { id: 2, quantity: 1 }]
        };

        expect(
            cartReducer(mockPrevState, {
                type: CartActionTypes.CLEAR_CART
            }).cartItems.length
        ).toBe(0);
    });
});
