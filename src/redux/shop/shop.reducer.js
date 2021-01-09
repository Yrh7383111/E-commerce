import { ShopActionTypes } from "./shop.types";



// Initial state of shop state
const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: null
};


// Return an object
// currentState - shop object
// Action - { type: string , payload: any }
const shopReducer = (currentState = INITIAL_STATE, action) => {
    const type = action.type;

    // Starting fetching
    if (type === ShopActionTypes.FETCH_COLLECTIONS_START)
    {
        return {
            // The order matters!!!
            // Spread (Keep) all the properties in shop
            ...currentState,
            // isFetching: true
        };
    }
    // Success
    else if (type === ShopActionTypes.FETCH_COLLECTIONS_SUCCESS)
    {
        return {
            // The order matters!!!
            // Spread (Keep) all the properties in shop
            ...currentState,
            isFetching: false,
            collections: action.payload
        };
    }
    // Failure
    else if (type === ShopActionTypes.FETCH_COLLECTIONS_FAILURE)
    {
        return {
            // The order matters!!!
            // Spread (Keep) all the properties in shop
            ...currentState,
            isFetching: false,
            errorMessage: action.payload
        };
    }
    // Default case
    else {
        return currentState;
    }
};



export default shopReducer;