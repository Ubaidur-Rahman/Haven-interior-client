import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';



const SimpleCardForm = () => {
  

   const stripe = useStripe();
   const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    
    const cardElement = elements.getElement(CardElement);

    
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      
    </form>
  );

};

export default SimpleCardForm;