import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/Success.module.scss";
import formatMoney from "../lib/formatMoney";
const {motion} = require('framer-motion')

const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export async function getServerSideProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ["line_items"],
    }
  );
  return { props: { order } };
}

const success = ({ order }) => {
  const route = useRouter();

  return (
    <div className="container">
      <div className={styles.successCard}>
        <h1>Thank you for your order!</h1>
        <h3>A confirmation email has been sent to</h3>
        <h4>{order.customer_details.email}</h4>
        <div>
          <h3>Adress</h3>
          {Object.entries(order.customer_details.address).map(
            ([key, value]) => (
              <p key={key}>
                {key} : {value}
              </p>
            )
          )}
        </div>
        <div>
          <h3>Products</h3>
          {order.line_items.data.map((item) => (
            <div key={item.id}>
              <p>Product: {item.description}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {formatMoney(item.price.unit_amount)}</p>
            </div>
          ))}
        </div>
        <button onClick={() => route.push("/")}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default success;
