import React from "react";

import styles from "../styles/Card.module.css";

var moment = require("moment");

const Card = ({ dailyReading, renderedUnit }) => {
  let today = new Date();
  const weekday = dailyReading.dt * 1000;
  today.setTime(weekday);

  const imgURL = `owf owf-${dailyReading.weather[0].id} owf-5x`;

  return (
    <div className="col-lg-2 col-md-5 col-sm-12 col-xs-12">
      <div className={styles.card}>
        <div>
          <h4>{moment(today).format("dddd")}</h4>
          <p>{moment(today).format("MMMM Do, h:mm a")}</p>
        </div>
        <div>
          <i className={`${imgURL} ${styles.images}`}></i>
          <h2>
            {Math.round(dailyReading.main.temp)} °{renderedUnit}
          </h2>
          <div className="card-body">
            <p className="card-text">{dailyReading.weather[0].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
