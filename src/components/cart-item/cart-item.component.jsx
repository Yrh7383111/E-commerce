import React from 'react';
import './cart-item.styles.scss';



// Cart Item component
// Object destructing
// this.props -> { item: { imageUrl, name, price, quantity } }
const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />

        <div className='item-details'>
            <div className='name'>{name}</div>
            <span className='price'>
                {quantity} x ${price}
            </span>
        </div>
    </div>
);



export default CartItem;