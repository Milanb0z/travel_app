import React from "react";
import classes from "./PlaceCard.module.scss";
import Rating from "components/Rating/Rating";

const PlaceCard = ({ title, address, stars, place }) => {
  return (
    <div className={classes.card}>
      <div className={classes.card_text}>
        <h2>{title}</h2>
        <span>Restaurant</span>
        <p>{address}</p>
        <Rating num={2} />
      </div>
    </div>
  );
};

export default PlaceCard;
