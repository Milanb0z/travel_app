import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Rating from "components/Rating/Rating";

import classes from "./PlaceCard.module.scss";

import StarIcon from "assets/icons/star.svg";

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

const PlaceCard = ({ title, address, stars, place, onHover, onLeave }) => {
  return (
    <Link to={`/place/${place.location_id}`}>
      <motion.div
        onHoverStart={onHover}
        onHoverEnd={onLeave}
        variants={cardVariants}
        className={classes.card}
      >
        <div className={classes.card_img}>
          {place.photo ? (
            <img src={place.photo.images.small.url} alt={title} />
          ) : null}
        </div>

        <div className={classes.text}>
          <h2>{title}</h2>
          <p>{address}</p>
          <div className={classes.rating}>
            <img src={StarIcon} alt="" className={classes.rating_icon} />
            <span className={classes.rating_text}>4.3</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default PlaceCard;
