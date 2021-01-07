import { ShopActionTypes } from "./shop.types";
import { firestore, transformCollectionsSnapShot } from "../../firebase/firebase.utils";



// Return an Action object that tells Shop Reducer to start fetching
export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

// Return an Action object that tells Shop Reducer fetching is successful
export const fetchCollectionsSuccess = collections => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
});

// Return an Action object that tells Shop Reducer fetching fails
export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

// Return an function
// Then dispatch action object to reducer accordingly
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionsReference = firestore.collection('collections');
        // Start fetching
        dispatch(fetchCollectionsStart());

        collectionsReference.get().then(collectionsSnapshot => {
            const transformedCollectionsSnapShot = transformCollectionsSnapShot(collectionsSnapshot);
            // Success
            dispatch(fetchCollectionsSuccess(transformedCollectionsSnapShot));
            // Failure
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
};