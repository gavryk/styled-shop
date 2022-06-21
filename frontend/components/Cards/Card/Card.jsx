import React from "react";
import Image from "next/image";
import style from "./Card.module.scss";

const Card = ({ attributes }) => {
  const { title, price, image } = attributes;

  return (
    <div className={style.card}>
      <div className={style.thumbnail}>
        <img
          src={image.data.attributes.formats.large.url}
        />
      </div>
      <div className={style.cardTitle}>
        <h3>{title}</h3>
      </div>
      <div className={style.price}>
        <span>{price}$</span>
      </div>
    </div>
  );
};

export default Card;
