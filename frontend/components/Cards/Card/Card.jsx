import React from "react";
import Image from "next/image";
import style from "./Card.module.scss";
import Link from 'next/link';

const Card = ({ attributes }) => {
  const { title, price, image, slug } = attributes;

  return (
    <div className={style.card}>
      <Link href={`/products/${slug}`}>
        <div className={style.thumbnail}>
          <img src={image.data.attributes.formats.large.url} />
        </div>
      </Link>
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
