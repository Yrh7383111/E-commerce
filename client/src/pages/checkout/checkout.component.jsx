import React from "react";
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartItemsTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import {
    CheckoutHeaderContainer,
    CheckoutPageContainer,
    HeaderBlockContainer,
    TotalContainer, WarningContainer
} from "./checkout.styles";



const CheckoutPage = () => {
    // Retrieve props from store
    // Caching - Memoization on Header component

    // If state.cart doesn't change, memoize cartItems
    const cartItems = useSelector(selectCartItems);
    // If state.cart doesn't change, memoize total
    const total = useSelector(selectCartItemsTotal);


    return (
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlockContainer>
                    <span>Product</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Description</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Quantity</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Price</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Clear</span>
                </HeaderBlockContainer>
            </CheckoutHeaderContainer>

            {/* Loop through cartItems */}
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}

            <TotalContainer className='total'>
                TOTAL: ${total}
            </TotalContainer>

            <WarningContainer>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 07/23 - CVV: 123
            </WarningContainer>

            <StripeCheckoutButton price={total} />
        </CheckoutPageContainer>
    );
};


export default CheckoutPage;