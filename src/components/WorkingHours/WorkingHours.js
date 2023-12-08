import React from "react";
import classes from "./WorkingHours.module.scss";

const daysInWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const WorkingHours = ({ hours }) => {
  const convertDate = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}:${minutes}0`;
  };

  return (
    <div className={classes.hours}>
      <h3>Working Hours</h3>
      <ul className={classes.list}>
        {hours.map((day, index) => (
          <li className={classes.list_item}>
            <p>{daysInWeek[index]}</p>
            <b>
              {convertDate(day[0].open_time)} - {convertDate(day[0].close_time)}
            </b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkingHours;
