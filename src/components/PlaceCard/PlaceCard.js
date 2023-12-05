import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Rating from "components/Rating/Rating";

import classes from "./PlaceCard.module.scss";

const cardVariants = {
  visible: {
    opacity: 1,
    x: 0,
  },
  initial: {
    opacity: 0,
    x: -20,
  },
};

const PlaceCard = ({ title, address, stars, place }) => {
  return (
    <Link to={`/place/${place.location_id}`}>
      <motion.div variants={cardVariants} className={classes.card}>
        <div className={classes.card_img}>
          {place.photo ? (
            <img src={place.photo.images.small.url} alt={title} />
          ) : null}
        </div>

        <div className={classes.card_text}>
          <h2>{title}</h2>
          <span>Restaurant</span>
          <p>{address}</p>
          <Rating num={+place.rating} />
        </div>
      </motion.div>
    </Link>
  );
};

export default PlaceCard;
