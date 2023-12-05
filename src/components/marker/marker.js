import React from "react";
import classes from "./Marker.module.scss";

import { motion } from "framer-motion";

const PinVariants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: 20,
  },
};

const Marker = ({ isHovered }) => {
  return (
    <motion.div
      variants={PinVariants}
      initial="hidden"
      animate="visible"
      className={`${classes.marker} ${isHovered ? classes.hover : ""}`}
    ></motion.div>
  );
};

export default Marker;
