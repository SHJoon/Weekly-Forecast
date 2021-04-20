import React from "react";

import Card from "./Card";

import styles from "../styles/Forecast.module.css";

const Forecast = ({ forecast, renderedUnit }) => {
  return (
    <div className="container">
      <h1 className={`display-2 jumbotron ${styles.title}`}>5-Day Forecast</h1>
      {forecast?.cod === "200" ? (
        <span>
          <h5 className="display-4 mb-4">
            {forecast.city.name}, {forecast.city.country}
          </h5>
          <div className="row justify-content-center">
            {forecast.list
              .filter((info) => {
                return info.dt_txt.includes("18:00:00");
              })
              .map((dailyReading, idx) => {
                return (
                  <Card
                    key={idx}
                    dailyReading={dailyReading}
                    renderedUnit={renderedUnit}
                  />
                );
              })}
          </div>
        </span>
      ) : null}
    </div>
  );
};

export default Forecast;
