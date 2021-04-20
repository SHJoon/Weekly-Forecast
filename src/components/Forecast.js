import React from "react";

import Card from "./Card";

const Forecast = ({ forecast, renderedUnit }) => {
  return (
    <div className="container">
      <h1 className="display-2 jumbotron">5-Day Forecast</h1>
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
                console.log(dailyReading);
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
