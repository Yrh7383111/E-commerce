import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect'
// ReactComponent indicates we want to build a React component that renders an SVG.
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from "../cart-icon /cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { signOutStart } from "../../redux/user/user.actions";
import {
    HeaderContainer,
    LogoContainer,
    OptionLinkContainer,
    OptionsContainer
} from "./header.styles";



// Destructing
// this.props -> { currentUser, hidden }
const Header = () => {
    // Retrieve props from store
    // Caching - Memoization
    // If state.user doesn't change, memoize currentUser
    const currentUser = useSelector(selectCurrentUser);
    // If state.cart doesn't change, memoize hidden
    const hidden = useSelector(selectCartHidden);

    // Dispatch Actions to all Reducers
    // dispatch - packs up the argument as an Action object, and deliveries it to all Reducers
    const dispatch = useDispatch();


    return (
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
                    <OptionLinkContainer as='div' onClick={() => dispatch(signOutStart())}>
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
)};


export default Header;