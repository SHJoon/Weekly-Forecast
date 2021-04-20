import React from "react";

import Card from "./Card";

const Forecast = ({ forecast, renderedUnit }) => {
  return (
    <div className="container">
      <h1 className="display-1 jumbotron">5-Day Forecast.</h1>
      {forecast?.cod === "200" ? (
        <span>
          <h5 className="display-5 text-muted">
            {forecast.city.name}, {forecast.city.country}
          </h5>
          <div>
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
