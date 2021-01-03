import React from 'react';
import './cart-item.styles.scss';
import {CartItemContainer, ImageContainer, ItemDetailsContainer} from "./cart-item.styles";



// Cart Item component
// Object destructing
// this.props -> { item: { imageUrl, name, price, quantity } }
const CartItem = ({ cartItem: { imageUrl, name, price, quantity } }) => (
    <CartItemContainer>
        <ImageContainer src={imageUrl} alt='item' />

        <ItemDetailsContainer>
            <spans>{name}</spans>
            <span>
                {quantity} x ${price}
            </span>
        </ItemDetailsContainer>
    </CartItemContainer>
);



export default CartItem;