import React  from 'react'
import StripeCheckout from 'react-stripe-checkout';



const StripButton = ({ price }: any) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Hvqw3ASQssJP6zDtUuTQJ7m7cOyFq12H8MASIIXz87Qp6JgWYTRSXNG1eM68U5w1oudm4y7ZFFt6D1tVvomKSd300ciFLLTlP';
    const onToken = (token:any) => {
        // console.log(token);
        // fetch('/save-stripe-token', {
        //     method: 'POST',
        //     body: JSON.stringify({token, date :new Date(token.created * 1000)}),
        //   }).then(response => {
        //     response.json().then(data => {
        //     });
        //   });
        
        alert('Payment Succesful!');
    };
        return (
            <StripeCheckout
            label='Pay Now'
            name='Green Feid SChool.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is 100$`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
          />
        )
    }

    export default StripButton