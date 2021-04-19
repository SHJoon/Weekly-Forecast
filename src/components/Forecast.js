import React from "react";

import Card from "./Card";

const Forecast = ({ forecast }) => {
  return (
    <div className="container">
      <h1 className="display-1 jumbotron">5-Day Forecast.</h1>
      <h5 className="display-5 text-muted">New York, US</h5>
      {forecast?.cod === 200 ? (
        <div>
          {forecast.map((dailyReading, idx) => {
            return <Card key={idx} dailyReading={dailyReading} />;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Forecast;
