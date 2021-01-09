import { ShopActionTypes } from "./shop.types";



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