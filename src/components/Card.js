import React from "react";

var moment = require("moment");

const Card = ({ dailyReading, renderedUnit }) => {
  let today = new Date();
  const weekday = dailyReading.dt * 1000;
  today.setTime(weekday);

  const imgURL = `owf owf-${dailyReading.weather[0].id} owf-5x`;

  return (
    <div className="col-lg-2 col-md-5 col-sm-12 col-xs-12">
      <div>
        <div>
          <h4>{moment(today).format("dddd")}</h4>
          <p>{moment(today).format("MMMM Do, h:mm a")}</p>
        </div>
        <div>
          <i className={imgURL}></i>
          <h2>
            {Math.round(dailyReading.main.temp)} °{renderedUnit}
          </h2>
          <div>
            <p>{dailyReading.weather[0].description}</p>
          </div>
        </div>
        <hr className="mx-6"></hr>
      </div>
    </div>
  );
};

export default Card;
