import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IpbvLFqER6NjDCJ3p38WKE4Cin24hF54CNGPwhU8cMh70LlGauXfaekfHK5EWJZAMBXXGXL6uPpI9CKl7oh92hQ00074cm0fI';


const onToken = token => {
    console.log(token);
    alert('Payment successful');
}
    return (
        <StripeCheckout 
        label="Pay Now"
        name="Crown-clothing store."
        billingAddress
        shippingAddress
        // image="https://sendeyo.com/up/d/f3eb2117da"
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;