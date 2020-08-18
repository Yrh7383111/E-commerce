import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
// ReactComponent indicates we want to build a React component that renders an SVG.
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon /cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import './header.styles.scss';



// Destructing
// this.props -> { currentUser, hidden }
const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser
                    ?
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
                    :
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            }
            {
                currentUser
                    ?
                <div className='option'>
                    {currentUser.displayName}
                </div>
                    :
                ''
            }
            <CartIcon />
        </div>
        { hidden ? null : <CartDropdown /> }
    </div>
);


// Header component needs currentUser prop
// Retrieve props from store
const mapStateToProps = createStructuredSelector({
    // Caching - Memoization

    // Same as currentUser: selectCurrentUser(state)
    // If state.user doesn't change, memoize currentUser
    currentUser: selectCurrentUser,
    // If state.cart doesn't change, memoize hidden
    hidden: selectCartHidden
});



// First parameter of connect() - If the component needs the props
export default connect(mapStateToProps)(Header);