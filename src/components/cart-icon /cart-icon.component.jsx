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


// Retrieve props from store
const mapStateToProps = createStructuredSelector({
    // Caching - Memoization on Cart Icon component

    // If state.cart doesn't change, memoize itemCount
    itemCount: state => selectCartItemsCount(state)
});

// Dispatch Actions to all Reducers
const mapDispatchToProps = dispatch => ({
    // dispatch - packs up the argument as an Action object, and deliveries it to all Reducers
    toggleCartHidden: () => dispatch(toggleCartHidden())
});



export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);