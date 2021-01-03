import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { CartIconContainer, ItemCountContainer, ShoppingIconContainer } from "./cart-icon.styles";



// Cart Icon component
// Object destructing
// this.props -> { toggleCartHidden, itemCount }
const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIconContainer />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
);


// Cart Icon component needs total number of quantities from cartItems prop
// Retrieve props from store
const mapStateToProps = createStructuredSelector({
    // Caching - Memoization on Cart Icon component

    // Same as itemCount: selectCartItemsCount(state)
    itemCount: selectCartItemsCount
});

// Cart Icon component will do some Actions to change the hidden property of the cart in the store
// Dispatch state to all Reducers
const mapDispatchToProps = dispatch => ({
    // setCurrentUser(user) - return an Action object
    // dispatch - packs up the argument as an Action object, and deliveries it to all Reducers
    toggleCartHidden: () => dispatch(toggleCartHidden())
});



export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);