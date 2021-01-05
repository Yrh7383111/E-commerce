import { ShopActionTypes } from "./shop.types";



// Return an Action object that tells Shop Reducer to update collections
export const updateCollections = collections => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collections
});