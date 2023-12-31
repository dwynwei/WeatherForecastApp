import React from "react";
import WaitingAnimation from "./WaitingAnimation";
import IconLoader from "./IconLoader";

function WeatherDataView({ weatherData, selectedCity }) {
  if (!weatherData)
    return (
      <div>
        <WaitingAnimation
          width={"400px"}
          height={"400px"}
          labelText={"Select a Time Frequency..."}
        />
      </div>
    );

  const { coord, weather, main, sys, visibility } = weatherData;

  return (
    <div>
      <h2>
        Weather in {selectedCity.city}/{selectedCity.country}
      </h2>
      <div className="align-items-center">
        <IconLoader icon={"mdiWeatherCloudyClock"} size={1} />
        <strong>Weather:</strong>{" "}
        {weather.map((w, index) => (
          <span key={index}>{`${w.main} (${w.description}) `}</span>
        ))}
      </div>
      <div className="align-items-center">
        <IconLoader icon={"mdiSunThermometer"} size={1} />
        <strong>Temperature:</strong> {(main.temp - 273.5).toFixed(1)} C
      </div>
      <div className="align-items-center">
        <IconLoader icon={"mdiWaterPercent"} size={1} />
        <strong>Humidity:</strong> {main.humidity}%
      </div>
      <div className="align-items-center">
        <IconLoader icon={"mdiWeatherSunsetUp"} size={1} />
        <strong>Sunrise:</strong>{" "}
        {new Date(sys.sunrise * 1000).toLocaleTimeString()}
      </div>
      <div className="align-items-center">
        <IconLoader icon={"mdiWeatherSunsetDown"} size={1} />
        <strong>Sunset:</strong>{" "}
        {new Date(sys.sunset * 1000).toLocaleTimeString()}
      </div>
    </div>
  );
}

export default WeatherDataView;
