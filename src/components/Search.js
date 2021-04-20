import React, { useState } from "react";
import axios from "axios";

import styles from "../styles/Search.module.css";

const Search = ({
  setIsError,
  city,
  setCity,
  setForecast,
  setRenderedUnit,
}) => {
  const [tempUnit, setTempUnit] = useState("imperial");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.length !== 0) {
      setIsError(false);
      let uriEncodedCity = encodeURIComponent(city);
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/forecast?q=${uriEncodedCity}&appid=${process.env.REACT_APP_API_KEY}&units=${tempUnit}`
        )
        .then((res) => {
          if (res.status !== 200) {
            throw new Error();
          }
          tempUnit === "imperial" ? setRenderedUnit("F") : setRenderedUnit("C");
          setForecast(res.data);
          setIsError(false);
        })
        .catch((err) => {
          console.error(err);
          setIsError(true);
        });
    } else {
      setIsError(true);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="px-2"
          type="text"
          placeholder="Enter city name."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label className="px-2">
          <input
            type="radio"
            name="unit"
            checked={tempUnit === "imperial"}
            value="imperial"
            onChange={(e) => setTempUnit(e.target.value)}
          />
          F
        </label>
        <label>
          <input
            type="radio"
            name="unit"
            checked={tempUnit === "metric"}
            value="metric"
            onChange={(e) => setTempUnit(e.target.value)}
          />
          C
        </label>

        <input
          className={`${styles.button} btn btn-primary mb-4`}
          type="submit"
          value="Retrieve forecast information"
        />
      </form>
    </div>
  );
};

export default Search;
