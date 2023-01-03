import { ShopActionTypes } from './shop.types';
import shopReducer from './shop.reducer';


const initialState = {
    collections: null,
    isFetching: false,
    errorMessage: null
};


describe('shopReducer', () => {
    test('should return initial state', () => {
        expect(shopReducer(undefined, {})).toEqual(initialState);
    });

    test('should set isFetching to true if fetchingCollectionsStart action', () => {
        expect(
            shopReducer(initialState, {
                type: ShopActionTypes.FETCH_COLLECTIONS_START
            }).isFetching
        ).toBe(true);
    });

    test('should set isFetching to false and collections to payload if fetchingCollectionsSuccess', () => {
        const mockItems = [{ id: 1 }, { id: 2 }];

        expect(
            shopReducer(initialState, {
                type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
                payload: mockItems
            })
        ).toEqual({
            ...initialState,
            isFetching: false,
            collections: mockItems
        });
    });

    test('should set isFetching to false and errorMessage to payload if fetchingCollectionsFailure', () => {
        expect(
            shopReducer(initialState, {
                type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
                payload: 'error'
            })
        ).toEqual({
            ...initialState,
            isFetching: false,
            errorMessage: 'error'
        });
    });
});
