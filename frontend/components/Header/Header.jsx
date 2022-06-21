import React from "react";
import style from "./Header.module.scss";
import { AiFillShopping } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  return (
    <header className={`${style.header} container`}>
      <Link href={"/"}>
        <div className={style.logo}>
          <span>StyledShop</span>
        </div>
      </Link>
      <div className={style.rightHeader}>
        <div className={style.cart}>
          <AiFillShopping />
        </div>
      </div>
    </header>
  );
};

export default Header;
