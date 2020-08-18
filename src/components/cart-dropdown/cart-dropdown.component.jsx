import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { withRouter } from 'react-router-dom'
import CustomButton from '../custom-button/custom-button.component';
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import './cart-dropdown.styles.scss';
import { toggleCartHidden } from "../../redux/cart/cart.actions";



// Cart Dropdown component that contains all the Cart Items
const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length
                ?
                cartItems.map(cartItem => (
                <CartItem key={cartItem.id} cartItem={cartItem}  />))
                :
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            toggleCartHidden();
        }}>Go to Checkout</CustomButton>
    </div>
);


// Cart Dropdown component needs cartItems prop
// Retrieve props from store
const mapStateToProps = createStructuredSelector({
    // Caching - Memoization on Cart Dropdown component

    // Same as cartItems: selectCartItems(state)
    cartItems: selectCartItems
});

// Cart Dropdown component will do some Actions to change the hidden property of the cart in the store
// Dispatch state to all Reducers
const mapDispatchToProps = dispatch => ({
    // setCurrentUser(user) - return an Action object
    // dispatch - packs up the argument as an Action object, and deliveries it to all Reducers
    toggleCartHidden: () => dispatch(toggleCartHidden())
});



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));