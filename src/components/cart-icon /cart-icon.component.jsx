import React from 'react';
import { connect } from 'react-redux'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import './cart-icon.styles.scss';



const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
);


// Cart Icon component will do some Actions to change the state in Root Reducers
// Dispatch state to all Reducers
const mapDispatchToProps = dispatch => ({
    // setCurrentUser(user) - return an Action object
    // dispatch - packs up the argument as an Action object, and deliveries it to all Reducers
    toggleCartHidden: () => dispatch(toggleCartHidden())
});



export default connect(null, mapDispatchToProps)(CartIcon);