import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { withRouter } from 'react-router-dom'
import CustomButton from '../custom-button/custom-button.component';
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import './cart-dropdown.styles.scss';



// Cart Dropdown component that contains all the Cart Items
const CartDropdown = ({ cartItems, history }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length
                ?
                cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}  />))
                :
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => history.push('/checkout')}>Go to Checkout</CustomButton>
    </div>
);


// Cart Dropdown component needs cartItems prop
// Retrieve props from store
const mapStateToProps = createStructuredSelector({
    // Caching - Memoization on Cart Dropdown component

    // Same as cartItems: selectCartItems(state)
    cartItems: selectCartItems
});



export default withRouter(connect(mapStateToProps)(CartDropdown));