import React from "react";

import classes from "./LoadingSpinner.module.scss";

import LoadingGif from "assets/loading.gif";

const LoadingSpinner = () => {
  return (
    <div className={classes.loading}>
      <img src={LoadingGif} alt="Loading" />
    </div>
  );
};

export default LoadingSpinner;
