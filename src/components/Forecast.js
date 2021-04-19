import React from "react";

import Card from "./Card";

const Forecast = ({ forecast }) => {
  return (
    <div>
      {forecast?.cod === 200 ? (
        <div>
          {forecast.map((dailyReading) => {
            return <Card dailyReading={dailyReading} />;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Forecast;
