import React from "react";
import classes from "./Sidebar.module.scss";

// Icons

import ProfileIcon from "../../assets/icons/profile.svg";

const Sidebar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.links}>
        <li className={classes.links_item}>
          <img src={ProfileIcon} alt="Profile" />
        </li>
        <li className={classes.links_item}>
          <img src={ProfileIcon} alt="Profile" />
        </li>
        <li className={classes.links_item}>
          <img src={ProfileIcon} alt="Profile" />
        </li>
        <li className={classes.links_item}>
          <img src={ProfileIcon} alt="Profile" />
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
