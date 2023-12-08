import React from "react";
import classes from "./Sidebar.module.scss";

// Icons

import ProfileIcon from "assets/icons/profile.svg";
import Logo from "assets/logo.svg";

import MapIcon from "assets/icons/map.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className={classes.nav}>
      <Link to={"/"}>
        <div className={classes.logo}>
          <img src={Logo} alt="" />
        </div>
      </Link>

      <ul className={classes.links}>
        <Link to={"/"}>
          <li className={classes.links_item}>
            <img src={MapIcon} alt="Profile" />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Sidebar;
