// Add a new cartItem
export const addItemToCart = (cartItems, cartItemToAdd) => {
    // Check if there the cartItemToAdd exists in the cartItems array
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    // cartItemToAdd exists in the cartItems array
    if (existingCartItem)
    {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem);
    }
    // cartItemToAdd doesn't exist in the cartItems array
    else {
        // Spread (Keep) all the existing cartItems
        // And add cartItemToAdd with a new property quantity valued 1
        return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
    }
};


// Decrease the quantity of an existing cartItem
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    // Check if there the cartItemToAdd exists in the cartItems array
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    // cartItemToAdd exists in the cartItems array, and the quantity is one
    if (existingCartItem.quantity === 1)
    {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
    // cartItemToAdd exists in the cartItems array, and the quantity is more than one
    else {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToRemove.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem);
    }
};