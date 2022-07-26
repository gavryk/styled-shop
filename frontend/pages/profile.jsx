import React from 'react';
import { useRouter } from 'next/router';
import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';
import styles from '../styles/Profile.module.scss';
import formatMoney from '../lib/formatMoney';
const stripe = require('stripe')(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(ctx) {
        const session = getSession(ctx.req, ctx.res);
        const stripeId = session.user[`${process.env.BASE_URL}/stripe_customer_id`];
        const paymentIntents = await stripe.paymentIntents.list({
            customer: stripeId,
        });
        return {props: {orders: paymentIntents.data}}
    }
})

export default function Profile({user, orders}) {
    const route = useRouter();
    return (
      user && (
        <div className="container">
          <div className={styles.profilePage}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <div className={styles.orderBlock}>
              {orders.map((order) => (
                <div className={styles.order}>
                  <h3>Order Number: {order.id}</h3>
                  <h4 className={styles.price}>
                    Amount: {formatMoney(order.amount)}
                  </h4>
                  <h4>Receipt Email: {user.email}</h4>
                </div>
              ))}
            </div>

            <button
              className={styles.btn}
              onClick={() => route.push("/api/auth/logout")}
            >
              Logout
            </button>
          </div>
        </div>
      )
    );
}

