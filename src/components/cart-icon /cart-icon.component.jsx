import React from 'react';
import { connect } from 'react-redux'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import './cart-icon.styles.scss';



// Cart Icon component
// Object destructing
// this.props -> { toggleCartHidden, itemCount }
const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);


// Cart Icon component needs total number of quantities from cartItems prop
// Retrieve props from store
const mapStateToProps = state => ({
    // Caching - Memoization on Cart Icon component
    itemCount: selectCartItemsCount(state)
});

// Cart Icon component will do some Actions to change the hidden property of the cart in the store
// Dispatch state to all Reducers
const mapDispatchToProps = dispatch => ({
    // setCurrentUser(user) - return an Action object
    // dispatch - packs up the argument as an Action object, and deliveries it to all Reducers
    toggleCartHidden: () => dispatch(toggleCartHidden())
});



export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);