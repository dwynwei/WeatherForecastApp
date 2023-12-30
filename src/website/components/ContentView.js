import React from "react";
import CountryAnimation from "./CountryAnimation";
import CityAnimation from "./CityAnimation";
import TimeIntervalAnimation from "./TimeIntervalAnimation";
import WeatherDataView from "./WeatherDataView";
import NoDataAnimation from "./NoDataAnimation";
import WaitingAnimation from "./WaitingAnimation";

function ContentView({
  className,
  style,
  selectedCountry,
  selectedCity,
  selectedFrequency,
  weatherData,
  loading,
}) {
  let view;

  if (loading) {
    view = (
      <WaitingAnimation
        width={"400px"}
        height={"400px"}
        labelText={"Loading..."}
      />
    );
  } else if (!selectedCountry) {
    view = (
      <CountryAnimation
        width={"400px"}
        height={"400px"}
        labelText={"Select a Country of World..."}
      />
    );
  } else if (!selectedCity) {
    view = (
      <CityAnimation
        width={"400px"}
        height={"400px"}
        labelText={"Select a City of Country..."}
      />
    );
  } else if (!selectedFrequency) {
    view = (
      <TimeIntervalAnimation
        width={"400px"}
        height={"400px"}
        labelText={"Select a Time Frequency..."}
      />
    );
  } else {
    view = weatherData ? (
      <WeatherDataView selectedCity={selectedCity} weatherData={weatherData} />
    ) : (
      <NoDataAnimation
        width={"400px"}
        height={"400px"}
        labelText={"No Data..."}
      />
    );
  }

  return (
    <div className={className} style={style}>
      {view}
    </div>
  );
}

export default ContentView;
