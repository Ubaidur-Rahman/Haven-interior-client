// import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Payment.css';

// const stripePromise = loadStripe('pk_test_51IeIaaCCHH4mR9XurrK6BWJhOlYmc09P7N6beH0CFGHpfQoOFIKhQnda2d0QEtqyU18nQ43BVREgueEFLd3ucutz00UI7yC9Dt');

const Payment = (props) => {
  console.log(props.service)

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)


  //   const stripe = useStripe();
  //   const elements = useElements();

  //  const handleSubmit = async (event) => {
  //    event.preventDefault();

  //    if (!stripe || !elements) {
  //      return;
  //    }


  //    const cardElement = elements.getElement(CardElement);


  //    const {error, paymentMethod} = await stripe.createPaymentMethod({
  //      type: 'card',
  //      card: cardElement,
  //    });

  //    if (error) {
  //      console.log('[error]', error);
  //    } else {
  //      console.log('[PaymentMethod]', paymentMethod);
  //    }
  //  };
  return (
    <div class="row">
      <label for="name"><FontAwesomeIcon icon={faUser} /> Full Name</label>
      <input type="text" name="name" value={loggedInUser.name} />
      <label for="email"> <FontAwesomeIcon icon={faEnvelope} /> Email</label>
      <input type="text" name="email" value={loggedInUser.email} />
      <input type="text" name="" value={props.service?.name} />
      <h5>Your Service Charged will be $ {props.service?.price}</h5>
      <Link to="/booking-list" ><button onClick={props.handleOrder} className="btn custom-btn-bg">book now</button></Link>
    </div>

  );
};

export default Payment;