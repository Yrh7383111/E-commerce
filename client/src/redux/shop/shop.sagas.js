import { takeLatest, call, put, all } from 'redux-saga/effects';
import { firestore, transformCollectionsSnapShot } from "../../firebase/firebase.utils";
import { ShopActionTypes } from "./shop.types";
import { fetchCollectionsFailure, fetchCollectionsSuccess } from "./shop.actions";


// Generator function
// Return a generator object
// yield - wait until complete, like await
export function* fetchCollections()
{
    try
    {
        const collectionsReference = firestore.collection('collections');
        const collectionsSnapshot = yield collectionsReference.get();
        // call - function call
        const transformedCollectionsSnapShot = yield call(transformCollectionsSnapShot, collectionsSnapshot);
        // put - saga dispatch
        yield put(fetchCollectionsSuccess(transformedCollectionsSnapShot))
    }
    catch (error)
    {
        // put - saga dispatch
        yield put(fetchCollectionsFailure(error.message));
    }
}

// Generator function - return a generator object
// yield - wait until complete, like await
// Listen for FETCH_COLLECTIONS_START
// Pass returned Action object from FETCH_COLLECTIONS_START, and call fetchCollections Saga
export function* fetchCollectionsStart()
{
    // takeLatest - cancel all the generator functions except the last
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollections);
}

// Combine all sagas into one saga
export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ]);
}