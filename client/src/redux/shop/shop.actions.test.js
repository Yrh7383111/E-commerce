import { ShopActionTypes } from './shop.types';
import {
    fetchCollectionsStart,
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions';


describe('fetchCollectionsStart action', () => {
    test('should create the fetchCollectionsStart action', () => {
        expect(fetchCollectionsStart().type).toEqual(
            ShopActionTypes.FETCH_COLLECTIONS_START
        );
    });
});

describe('fetchCollectionsSuccess action', () => {
    test('should create the fetchCollectionsSuccess action', () => {
        const mockCollectionsMap = {
            hats: {
                id: 1
            }
        };
        const action = fetchCollectionsSuccess(mockCollectionsMap);

        expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_SUCCESS);
        expect(action.payload).toEqual(mockCollectionsMap);
    });
});

describe('fetchCollectionsFailure action', () => {
    test('should create the fetchCollectionsFailure action', () => {
        const action = fetchCollectionsFailure('errored');

        expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_FAILURE);
        expect(action.payload).toEqual('errored');
    });
});
