import React from "react";
import classes from "./Button.module.scss";

const Button = ({ children, icon, ...btnProps }) => {
  return (
    <button {...btnProps} className={classes.btn}>
      {children}
      {icon ? <img src={icon} alt="Btn" className={classes.icon} /> : ""}
    </button>
  );
};

export default Button;
