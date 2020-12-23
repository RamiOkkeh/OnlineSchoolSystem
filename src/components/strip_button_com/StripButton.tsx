import React from "react";
import StripeCheckout from "react-stripe-checkout";
// import local_IP from '../../local_IP';
const local_IP = require("../../local_IP") || "";

const StripButton = ({ semester, price, user }: any) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Hvqw3ASQssJP6zDtUuTQJ7m7cOyFq12H8MASIIXz87Qp6JgWYTRSXNG1eM68U5w1oudm4y7ZFFt6D1tVvomKSd300ciFLLTlP";
  const onToken = (token: any) => {
    let path =
      process.env.NODE_ENV === "production"
        ? "/payment/checkout"
        : `${local_IP}/payment/checkout`;
    console.log({ userID: user.userID, semester });
    fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userID: user.userID, semester, token }),
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
        alert("Payment Succesful!");
        window.location.reload();
      });
    });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Online School System"
      billingAddress
      shippingAddress
      image="https://image.flaticon.com/icons/png/512/81/81566.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripButton;
