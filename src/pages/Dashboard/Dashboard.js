import React from "react";
import classes from "./Dashboard.module.scss";
import Sidebar from "components/Sidebar/Sidebar";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <section className={classes.wrapper}>
      <Sidebar />
      <main className={classes.main}>
        <Outlet />
      </main>
    </section>
  );
};

export default Dashboard;
