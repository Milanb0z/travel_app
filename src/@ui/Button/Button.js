import React from "react";
import classes from "./Button.module.scss";

const Button = ({ children, filled, icon, ...btnProps }) => {
  return (
    <button
      {...btnProps}
      className={`${!!children ? classes.btn : classes.btnIcon} ${
        filled ? classes.fill : ""
      }`}
    >
      {children}
      {icon ? <img src={icon} alt="Btn" className={classes.icon} /> : ""}
    </button>
  );
};

export default Button;
