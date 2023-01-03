import React from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {
    CartDropdownContainer,
    CartItemsContainer,
    EmptyMessageContainer,
    GoToCheckoutContainer
} from "./cart-dropdown.styles";



// Cart Dropdown component that contains all the Cart Items
const CartDropdown = () => {
    // Retrieve props from store
    // Caching - Memoization on Cart Dropdown component
    // Same as cartItems: selectCartItems(state)
    const cartItems = useSelector(selectCartItems);
    // Dispatch Actions to all Reducers
    // setCurrentUser(user) - return an Action object
    // dispatch - packs up the argument as an Action object, and deliveries it to all Reducers
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {cartItems.length
                    ?
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} cartItem={cartItem}/>))
                    :
                    <EmptyMessageContainer>
                        Your cart is empty
                    </EmptyMessageContainer>
                }
            </CartItemsContainer>
            <GoToCheckoutContainer onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>
                Go to Checkout
            </GoToCheckoutContainer>
        </CartDropdownContainer>
    );
};


export default CartDropdown;