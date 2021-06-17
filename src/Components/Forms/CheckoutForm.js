import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const paymentSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.log("check internet");
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: "cardElement",
    });
    if (error) {
      console.log(error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  }; //end payment submission
  //  <h1 className="mt-5">For payment please press following</h1>
  //       <StripeCheckout
  //         stripeKey="pk_test_51Ix3FQFBlIJrV8QRS1gUZm4GEXLFR4vtj58LlgpjPzTvm4LSDCNeOBGmtkE83zyaQIYsSbrwpo0eLEnefc7331Ch00gkb6WJ0p"
  //         token={handleToken}
  //       ></StripeCheckout>
  return (
    <div>
      <form onSubmit={paymentSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckOutForm;
