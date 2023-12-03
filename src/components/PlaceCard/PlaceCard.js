import React from "react";
import { Link } from "react-router-dom";

import Rating from "components/Rating/Rating";

import classes from "./PlaceCard.module.scss";

const PlaceCard = ({ title, address, stars, place }) => {
  return (
    <Link to="sd">
      <div className={classes.card}>
        <div className={classes.card_text}>
          <h2>{title}</h2>
          <span>Restaurant</span>
          <p>{address}</p>
          <Rating num={2} />
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;
