import React from "react";
import style from "./Header.module.scss";
import { AiFillShopping } from "react-icons/ai";
import Link from "next/link";
import Cart from "../Cart/Cart";
import { useShopContext } from "../../lib/context";

const Header = () => {
  const {showCart, setShowCart} = useShopContext();

  return (
    <header className={`${style.header} container`}>
      <Link href={"/"}>
        <div className={style.logo}>
          <span>StyledShop</span>
        </div>
      </Link>
      <div className={style.rightHeader}>
        <div className={style.cart} onClick={() => setShowCart(true)}>
          <AiFillShopping />
        </div>
      </div>
      <Cart/>
    </header>
  );
};

export default Header;
