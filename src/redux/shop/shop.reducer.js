import SHOP_DATA from "./shop.data";



// Initial state of shop state
const INITIAL_STATE = {
    collections: SHOP_DATA
};


// Return an object
// Action - { type: string , payload: any }
const shopReducer = (currentState = INITIAL_STATE, action) => {
    return currentState;
};



export default shopReducer;