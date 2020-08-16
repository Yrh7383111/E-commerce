import React from 'react';
import { connect } from 'react-redux'
import { clearItems } from "../../redux/cart/cart.actions";
import './checkout-item.styles.scss';



// Checkout component
// Object destructing
// this.props -> { name, imageUrl, price, quantity }
const CheckoutItem = ({ cartItem, clearItems }) => {
    // Object destructing
    const { imageUrl, name, quantity, price } = cartItem;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItems(cartItem)}>&#10005;</div>
        </div>
)};


// Checkout Item component will do some Actions to change the cartItems property of the cart in the store
// Dispatch state to all Reducers
const mapDispatchToProps = dispatch => ({
    // clearItems(item) - return an Action object
    // dispatch - packs up the argument as an Action object, and deliveries it to all Reducers
    clearItems: cartItem => dispatch(clearItems(cartItem))
});



export default connect(null, mapDispatchToProps)(CheckoutItem);