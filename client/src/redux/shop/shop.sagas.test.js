import { takeLatest, call, put } from 'redux-saga/effects';
import {
    firestore,
    transformCollectionsSnapShot
} from '../../firebase/firebase.utils';
import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions';
import { ShopActionTypes } from './shop.types';
import {
    fetchCollections,
    fetchCollectionsStart,
} from './shop.sagas';


describe('fetch collections start saga', () => {
    test('should trigger on FETCH_COLLECTIONS_START', () => {
        const generator = fetchCollectionsStart();

        expect(generator.next().value).toEqual(
            takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollections)
        );
    });
});

describe('fetch collections async saga', () => {
    const generator = fetchCollections();

    test('should call firestore collection ', () => {
        const getCollection = jest.spyOn(firestore, 'collection');
        generator.next();

        expect(getCollection).toHaveBeenCalled();
    });

    test('should call convertCollectionsSnapshot saga ', () => {
        const mockSnapshot = {};

        expect(generator.next(mockSnapshot).value).toEqual(
            call(transformCollectionsSnapShot, mockSnapshot)
        );
    });

    test('should fire fetchCollectionsSuccess if collectionsMap is succesful', () => {
        const mockCollectionsMap = {
            hats: { id: 1 }
        };

        expect(generator.next(mockCollectionsMap).value).toEqual(
            put(fetchCollectionsSuccess(mockCollectionsMap))
        );
    });

    test('should fire fetchCollectionsFailure if get collection fails at any point', () => {
        const newGenerator = fetchCollections();
        newGenerator.next();

        expect(newGenerator.throw({ message: 'error' }).value).toEqual(
            put(fetchCollectionsFailure('error'))
        );
    });
});
