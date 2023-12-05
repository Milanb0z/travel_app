import React, { useEffect } from "react";

import classes from "./Rating.module.scss";

import StarIcon from "assets/icons/star.svg";
import HalfStarIcon from "assets/icons/star_half.svg";
import EmptyStarIcon from "assets/icons/star_empty.svg";

const Rating = ({ num }) => {
  const icons = [
    EmptyStarIcon,
    EmptyStarIcon,
    EmptyStarIcon,
    EmptyStarIcon,
    EmptyStarIcon,
  ];

  return (
    <div className={classes.stars}>
      {icons.map((star, index) => (
        <img key={index} src={star} alt="star" />
      ))}
    </div>
  );
};

export default Rating;
