import React from "react";
var moment = require("moment");

const Card = ({ dailyReading }) => {
  let today = new Date();
  const weekday = dailyReading.dt * 1000;
  today.setTime(weekday);

  const imgURL = `owf owf-${dailyReading.weather[0].id} owf-5x`;

  return (
    <div className="col-sm-2">
      <div className="card">
        <h3 className="card-title">{moment(today).format("dddd")}</h3>
        <p className="text-muted">{moment(today).format("MMMM Do, h:mm a")}</p>
        <i className={imgURL}></i>
        <h2>{Math.round(dailyReading.main.temp)} °F</h2>
        <div className="card-body">
          <p className="card-text">{dailyReading.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
