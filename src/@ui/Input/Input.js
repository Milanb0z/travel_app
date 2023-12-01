import React from "react";
import classes from "./Input.module.scss";

const Input = ({ ...inputProps }) => {
  return <input type="text" {...inputProps} className={classes.field} />;
};

export default Input;
