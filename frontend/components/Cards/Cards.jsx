import React from "react";
import Card from "./Card/Card";
import style from "./Cards.module.scss";

const Cards = ({ items }) => {
  return (
    <div className={style.cardsGridWrapper}>
      {items.map((item) => {
        return (
          <Card {...item} key={item.attributes.slug}/>
        );
      })}
    </div>
  );
};

export default Cards;
