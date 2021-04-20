import React, { useState } from "react";

import Search from "../components/Search";
import Forecast from "../components/Forecast";
import InputError from "../components/InputError";

const Homepage = () => {
  const [isError, setIsError] = useState(false);
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState(null);
  const [renderedUnit, setRenderedUnit] = useState("F");

  return (
    <div>
      <h1>Weather Forecast</h1>
      <Search
        setIsError={setIsError}
        city={city}
        setCity={setCity}
        setForecast={setForecast}
        setRenderedUnit={setRenderedUnit}
      />
      {isError && <InputError />}
      <Forecast forecast={forecast} renderedUnit={renderedUnit} />
    </div>
  );
};

export default Homepage;
