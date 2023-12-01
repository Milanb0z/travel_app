import React from "react";
import classes from "./Toggle.module.scss";

const Toggle = ({ children, checked }) => {
  return (
    <div className={classes.toggle}>
      <p className={classes.label}>{children}</p>
      <label className={classes.switch}>
        <input type="checkbox" checked={checked} />
        <span className={`${classes.slider} ${classes.round}`}></span>
      </label>
    </div>
  );
};

export default Toggle;
