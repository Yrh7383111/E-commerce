import React from 'react';
import StripeCheckout from 'react-stripe-checkout';



const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HHx16FgNJHNEM4ebeixSvtWhrd3YDR4n91tC1sgbcaCME1AKmQLLKhDUt1lazQaYv8qaXzsrHAtvRH3bSe1vvnP00LdfhxWJF';

    const onToken = token => {
        console.log(token);
        console.log("Payment successful")
    };


    return (
        <StripeCheckout label='Pay Now'
                        image='https://svgshare.com/i/CUz.svg'
                        name='E Commerce'
                        description={`Your total is $${price}`}
                        alipay
                        bitcoin
                        amount={priceForStripe}
                        billingAddress
                        shippingAddress
                        panelLabel='Pay Now'
                        token={onToken}
                        stripeKey={publishableKey} />
    );
};


export default StripeCheckoutButton;