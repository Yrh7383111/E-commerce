import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
// ReactComponent indicates we want to build a React component that renders an SVG.
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon /cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import {
    HeaderContainer,
    LogoContainer,
    OptionLinkContainer,
    OptionsContainer
} from "./header.styles";



// Destructing
// this.props -> { currentUser, hidden }
const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>

        <OptionsContainer>
            <OptionLinkContainer to='/shop'>
                SHOP
            </OptionLinkContainer>
            <OptionLinkContainer to='/shop'>
                CONTACT
            </OptionLinkContainer>
            {
                currentUser
                    ?
                <OptionLinkContainer as='div' onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionLinkContainer>
                    :
                <OptionLinkContainer to='/signin'>
                    SIGN IN
                </OptionLinkContainer>
            }
            {
                currentUser
                    ?
                <OptionLinkContainer as='div'>
                    {currentUser.displayName}
                </OptionLinkContainer>
                    :
                ''
            }
            <CartIcon />
        </OptionsContainer>
        { hidden ? null : <CartDropdown /> }
    </HeaderContainer>
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