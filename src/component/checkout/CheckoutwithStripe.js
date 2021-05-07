import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function computeQuantity(cart) {
  return cart.reduce((count, itemIncart) => count + itemIncart.quantity, 0);
}

class CheckoutWithtSripe extends React.Component {

  onToken = (res) => {
     fetch('/svae-stripe-token', {
       method: 'POST',
       body: JSON.stringify(token),

     }).then(res => {
       res.json().then(data => {
         console.log('Payment token generated, ${data.name}')
       })
     })
  };

  render(){
    return (
      <StripeCheckout
      amount= '10.00'
      name="STRIPE_INTEGRATION"
      description={'Order of ${computeQuantity(cart)} items!'}
      image='LINKTOIMAGE'
      stripeKey=""
      currency="INR"
      email='USER_EMAIL'
      token={this.onToken} />
    );
  }
}

export default CheckoutWithStripe;
