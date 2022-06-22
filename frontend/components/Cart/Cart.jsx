import React from "react";
import { useShopContext } from "../../lib/context";
import style from "./Cart.module.scss";

const Cart = () => {
  const { cartItems } = useShopContext();

  return (
    <div className={style.cartWrapper}>
      <div className={style.cart}>
        {cartItems.length < 1 && (
          <div className={style.empty}>
            <h3>You have more shopping to do 😉</h3>
          </div>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <div className={style.itemsWrapper}>
                <div className={style.cartItem}>
                  <div className={style.cartItemThumbnail}>
                    <img
                      src={item.image.data.attributes.formats.small.url}
                      alt={item.title}
                    />
                  </div>
                  <div className={style.cartItemInfo}>
                    <h4 className={style.cartItemName}>{item.title}</h4>
                    <span className={style.cartItemPrice}>{item.price}$</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cart;
