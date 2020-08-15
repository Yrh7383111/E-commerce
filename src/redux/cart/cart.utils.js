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