import React,{ useState } from "react";
import "./current-weather.css";

const convertCelsiusToFahrenheit = (celsius) => {
  return (celsius * 9/5) + 32;
};

const CurrentWeather = ({ data }) => {
  const [isCelsius, setIsCelsius] = useState(true);
  const temperatureCelsius = Math.round(data.main.temp);
  const temperatureFahrenheit = Math.round(convertCelsiusToFahrenheit(temperatureCelsius));
  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        
        <button onClick={toggleTemperatureUnit} className="btn">
          Convert to {isCelsius ? "Fahrenheit" : "Celsius"}
        </button>
      </div>
      <div className="bottom">
      <p className="temperature">
          {isCelsius ? `${temperatureCelsius}°C` : `${temperatureFahrenheit}°F`}
        </p>
        
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Min</span>
            <span className="parameter-value">{Math.round(data.main.temp_min)} °C </span>
            
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Max</span>
            <span className="parameter-value">{Math.round(data.main.temp_max)} °C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{Math.round(data.wind.speed)} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Average</span>
            <span className="parameter-value">{Math.round(data.main.temp_min + data.main.temp_max)/2} °C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{Math.round(data.main.humidity)}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{Math.round(data.main.pressure)} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
