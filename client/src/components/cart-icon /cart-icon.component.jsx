import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { CartIconContainer, ItemCountContainer, ShoppingIconContainer } from "./cart-icon.styles";



// Cart Icon component
// Object destructing
// this.props -> { toggleCartHidden, itemCount }
const CartIcon = () => {
    // Retrieve props from store
    // Caching - Memoization on Cart Icon component
    // If state.cart doesn't change, memoize itemCount
    const itemCount = useSelector(selectCartItemsCount);

    // Dispatch Actions to all Reducers
    // dispatch - packs up the argument as an Action object, and deliveries it to all Reducers
    const dispatch = useDispatch();


    return (
        <CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIconContainer />
            <ItemCountContainer>{itemCount}</ItemCountContainer>
        </CartIconContainer>
    );
};


export default CartIcon;