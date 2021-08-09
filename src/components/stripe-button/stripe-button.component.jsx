import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JMUldI2xyKnoS4xl6SWqSYpuKfUbIlSl0pfaBnFXjfndhOXIe3L5r32hEPtV3kl6peFGKhiwaROyNy3Hha5TDh700FWlYMxHM";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="ae Shop LLC"
      description={`Your total is $${price}`}
      billingAddress
      shippingAddress
      image="https://sendeyo.com/en/f3eb2117da"
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
