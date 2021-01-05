import { ShopActionTypes } from "./shop.types";



// Initial state of shop state
const INITIAL_STATE = {
    collections: null
};


// Return an object
// currentState - shop object
// Action - { type: string , payload: any }
const shopReducer = (currentState = INITIAL_STATE, action) => {
    const type = action.type;

    if (type === ShopActionTypes.UPDATE_COLLECTIONS)
    {
        return {
            // The order matters!!!
            // Spread (Keep) all the properties in shop
            ...currentState,
            collections: action.payload
        }
    }
    // Default case
    else {
        return currentState;
    }
};



export default shopReducer;