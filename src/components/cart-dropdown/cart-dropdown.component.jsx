import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { withRouter } from 'react-router-dom'
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
const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
    <CartDropdownContainer>
        <CartItemsContainer >
            {cartItems.length
                ?
                cartItems.map(cartItem => (
                <CartItem key={cartItem.id} cartItem={cartItem}  />))
                :
                <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            }
        </CartItemsContainer>
        <GoToCheckoutContainer onClick={() => {
            history.push('/checkout');
            toggleCartHidden();
        }}>Go to Checkout</GoToCheckoutContainer>
    </CartDropdownContainer>
);


// Retrieve props from store
const mapStateToProps = createStructuredSelector({
    // Caching - Memoization on Cart Dropdown component

    // Same as cartItems: selectCartItems(state)
    cartItems: selectCartItems
});

// Dispatch Actions to all Reducers
const mapDispatchToProps = dispatch => ({
    // setCurrentUser(user) - return an Action object
    // dispatch - packs up the argument as an Action object, and deliveries it to all Reducers
    toggleCartHidden: () => dispatch(toggleCartHidden())
});



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));