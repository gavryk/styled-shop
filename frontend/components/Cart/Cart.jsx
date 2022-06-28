import React from "react";
import { useShopContext } from "../../lib/context";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import style from "./Cart.module.scss";
const { motion } = require("framer-motion");

//Motion Variants Animate
const cardAnim = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.3 }
  },
};

const Cart = () => {
  const { cartItems, setShowCart, showCart, onAddProd, onRemove, totalPrice } =
    useShopContext();


  return (
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      className={style.cartWrapper}
      onClick={() => setShowCart(false)}
    >
      <motion.div
        initial={{x: "100%"}}
        animate={{x: "0%"}}
        transition={{type: 'tween'}}
        className={style.cart}
        onClick={(e) => e.stopPropagation()}
      >
        {cartItems.length < 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className={style.empty}
          >
            <h3>You have more shopping to do 😉</h3>
          </motion.div>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <motion.div className={style.itemsWrapper} key={item.slug}>
                <motion.div
                  variants={cardAnim}
                  className={style.cartItem}
                  key={item.slug}
                >
                  <div className={style.cartItemThumbnail}>
                    <img
                      src={item.image.data.attributes.formats.small.url}
                      alt={item.title}
                    />
                  </div>
                  <div className={style.cartItemInfo}>
                    <h4 className={style.cartItemName}>{item.title}</h4>
                    <span className={style.cartItemPrice}>{item.price}$</span>
                    <div className={style.quantity}>
                      <button onClick={() => onRemove(item)}>
                        <AiFillMinusCircle />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onAddProd(item, 1)}>
                        <AiFillPlusCircle />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}

        {cartItems.length >= 1 && (
          <div className={style.totalPrice}>
            <h3>Subtotal: {totalPrice} $</h3>
            <button>Purchase</button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Cart;
