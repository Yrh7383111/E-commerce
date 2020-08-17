import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsTotal } from "../../redux/cart/cart.selectors";
import './checkout.styles.scss'
import CheckoutItem from "../../components/checkout-item/checkout-item.component";




const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Clear</span>
            </div>
        </div>

        {/* Loop through cartItems */}
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}

        <div className='total'>
            TOTAL: ${total}
        </div>
    </div>
);


// Header component needs currentUser prop
// Retrieve props from store
const mapStateToProps = createStructuredSelector({
    // Caching - Memoization on Header component

    // Same as cartItems: selectCartItems(state)
    cartItems: selectCartItems,
    total: selectCartItemsTotal
})



export default connect(mapStateToProps)(CheckoutPage);