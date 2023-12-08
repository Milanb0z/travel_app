import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@ui";

import classes from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <section className={classes.notFound}>
      <div className={classes.content}>
        <h2>404</h2>
        <p>Page Not Found..</p>
        <Link to="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
