import React from 'react'
import StripeCheckout from 'react-stripe-checkout';



const StripButton = ({ price, user }: any) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Hvqw3ASQssJP6zDtUuTQJ7m7cOyFq12H8MASIIXz87Qp6JgWYTRSXNG1eM68U5w1oudm4y7ZFFt6D1tVvomKSd300ciFLLTlP';
  const onToken = (token: any) => {
    let path =
      process.env.NODE_ENV === "production"
        ? "/payment/checkout"
        : "http://127.0.0.1:8000/payment/checkout";
    fetch(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userID: user.userID, token }),
    }).then(response => {
      response.json()
        .then(data => {
          console.log(data);
          alert('Payment Succesful!');
          window.location.reload()
        });
    });
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='Green Feid SChool.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripButton