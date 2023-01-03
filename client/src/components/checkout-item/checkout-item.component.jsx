import React from 'react';
import { useDispatch } from 'react-redux'
import { addItem,  removeItem, clearItems } from "../../redux/cart/cart.actions";
import './checkout-item.styles.scss';
import {
    CheckoutItemContainer, ImageContainer, InfoContainer, QuantityContainer, RemoveButtonContainer,
} from "./checkout-item.styles";


// Checkout component
// Object destructing
const CheckoutItem = ({ cartItem }) => {
    const { imageUrl, name, quantity, price } = cartItem;
    // Dispatch Actions to all Reducers
    const dispatch = useDispatch();


    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item' />
            </ImageContainer>
            <InfoContainer>{name}</InfoContainer>
            <QuantityContainer>
                <div onClick={() => dispatch(removeItem(cartItem))}>
                  &#10094;
                </div>
                <span>{quantity}</span>
                <div onClick={() => dispatch(addItem(cartItem))}>
                  &#10095;
                </div>
            </QuantityContainer>
            <InfoContainer>{price}</InfoContainer>
            <RemoveButtonContainer onClick={() => dispatch(clearItems(cartItem))}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
)};


export default CheckoutItem;
