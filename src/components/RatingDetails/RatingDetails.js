import React from "react";

import StarIcon from "assets/icons/star.svg";

import classes from "./RatingDetails.module.scss";

const RatingDetails = ({ ratings }) => {
  const totalRatings = ratings.reduce(
    (accumulator, currentValue) => accumulator + +currentValue,
    0
  );

  console.log(ratings);
  return (
    <div className={classes.rating}>
      <h3>Ratings</h3>
      <div className={classes.rating_body}>
        <ul className={classes.rating}>
          {ratings
            .map((rate, index) => (
              <li className={classes.ratings_item}>
                <label for={index + 1}>{index + 1}</label>
                <progress
                  id={index + 1}
                  value={rate}
                  max={totalRatings}
                ></progress>
              </li>
            ))
            .reverse()}
        </ul>
        <div className={classes.details}>
          <h1>4.5</h1>
          <div className={classes.stars}>
            <img src={StarIcon} alt="star" />
            <img src={StarIcon} alt="star" />
            <img src={StarIcon} alt="star" />
            <img src={StarIcon} alt="star" />
            <img src={StarIcon} alt="star" />
          </div>
          <p>
            Number of reviews: <b>{totalRatings}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RatingDetails;
