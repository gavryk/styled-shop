import React, { useEffect } from "react";
import style from "./Header.module.scss";
import { AiFillShopping } from "react-icons/ai";
import Link from "next/link";
import Cart from "../Cart/Cart";
import { useShopContext } from "../../lib/context";

const {AnimatePresence, motion} = require('framer-motion');

const Header = () => {
  const {showCart, setShowCart, totalQuantities} = useShopContext();

  useEffect(() => {
    showCart
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [showCart])

  return (
    <header className={`${style.header} container`}>
      <Link href={"/"}>
        <div className={style.logo}>
          <span>StyledShop</span>
        </div>
      </Link>
      <div className={style.rightHeader}>
        <div className={style.cart} onClick={() => setShowCart(true)}>
          {totalQuantities > 0 && (
            <motion.span animate={{scale: 1}} initial={{scale: 0}} className={style.totalCount}>{totalQuantities}</motion.span>
          )}
          <AiFillShopping />
        </div>
      </div>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </header>
  );
};

export default Header;
