import React from 'react';
import { connect } from 'react-redux'
import { addItem,  removeItem, clearItems } from "../../redux/cart/cart.actions";
import './checkout-item.styles.scss';



// Checkout component
// Object destructing
const CheckoutItem = ({ cartItem, addItem, removeItem, clearItems }) => {
    const { imageUrl, name, quantity, price } = cartItem;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>
                  &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>
                  &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItems(cartItem)}>&#10005;</div>
        </div>
)};


// Checkout Item component will do some Actions to change the cartItems property of the cart in the store
// Dispatch state to all Reducers
const mapDispatchToProps = dispatch => ({
    // dispatch - packs up the argument as an Action object, and deliveries it to all Reducers
    // addItemToCart(cartItem) - return an Action object
    addItem: cartItem => dispatch(addItem(cartItem)),
    removeItem: cartItem => dispatch(removeItem(cartItem)),
    clearItems: cartItem => dispatch(clearItems(cartItem))
});



export default connect(null, mapDispatchToProps)(CheckoutItem);