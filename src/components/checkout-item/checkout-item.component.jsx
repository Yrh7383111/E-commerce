import React from 'react';
import { connect } from 'react-redux'
import { addItem,  removeItem, clearItems } from "../../redux/cart/cart.actions";
import './checkout-item.styles.scss';
import {
    CheckoutItemContainer, ImageContainer, InfoContainer, QuantityContainer, RemoveButtonContainer,
} from "./checkout-item.styles";



// Checkout component
// Object destructing
const CheckoutItem = ({ cartItem, addItem, removeItem, clearItems }) => {
    const { imageUrl, name, quantity, price } = cartItem;

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item' />
            </ImageContainer>
            <InfoContainer>{name}</InfoContainer>
            <QuantityContainer>
                <div onClick={() => removeItem(cartItem)}>
                  &#10094;
                </div>
                <span>{quantity}</span>
                <div onClick={() => addItem(cartItem)}>
                  &#10095;
                </div>
            </QuantityContainer>
            <InfoContainer>{price}</InfoContainer>
            <RemoveButtonContainer onClick={() => clearItems(cartItem)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
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