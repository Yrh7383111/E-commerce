import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// ReactComponent indicates we want to build a React component that renders an SVG.
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon /cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import './header.styles.scss';



// Object destructing - this.props
const Header = ({ currentUser }) => (
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
            <CartIcon />
        </div>
        <CartDropdown />
    </div>
);


// Retrieve props from Root Reducers
const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
})



// First parameter of connect() - If the component needs the props
export default connect(mapStateToProps)(Header);