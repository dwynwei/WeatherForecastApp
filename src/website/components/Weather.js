import React from "react";
import SelectNav from "./SelectNav";
import backgroundImg from "../../assets/background/weather_bg.jpg";
import ContentView from "./ContentView";
import { useEffect } from "react";
import { useState } from "react";
import { createHttpHelperWithBaseURL } from "../helper/HttpHelper";
import { useRef } from "react";
import { frequencyOptions } from "../Enum/FrequencyEnum";

function Weather() {
  const [dataList, setDataList] = useState(null);
  const [citiesDataList, setCitiesDataList] = useState([]);
  const [countriesDataList, setCountriesDataList] = useState([]);
  const frequencyList = frequencyOptions;
  const [weatherData, setWeatherData] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedFrequency, setSelectedFrequency] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const prevFrequencyRef = useRef();
  const prevCityRef = useRef();
  const prevSelectedFrequency = prevFrequencyRef.current;
  const [loading, setLoading] = useState(false);
  const weatherCastBasePath = createHttpHelperWithBaseURL(
    "http://localhost:8080"
  );
  const citiesBasePath = createHttpHelperWithBaseURL(
    "https://countriesnow.space"
  );

  const getCurrentCityWeatherCast = async () => {
    setLoading(true);
    try {
      const response = await weatherCastBasePath.get("/api/weather/current");
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error during fetch data:", error);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const getCountriesFromApi = async () => {
    setLoading(true);
    try {
      const response = await citiesBasePath.get("/api/v0.1/countries");
      setDataList(response?.data?.data);

      const countriesList = response.data?.data.map((countryObj, index) => ({
        id: index,
        country: countryObj.country,
      }));

      setCountriesDataList(countriesList);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    prevFrequencyRef.current = selectedFrequency;
    prevCityRef.current = selectedCity;
  }, []);

  useEffect(() => {
    getCountriesFromApi();
  }, []);

  useEffect(() => {
    if (dataList && selectedCountry) {
      const allCities = dataList
        .flatMap((countryObj) =>
          countryObj.cities.map((city, cityIndex) => ({
            id: `${countryObj.country}-${cityIndex}`,
            city: city,
            country: countryObj.country,
          }))
        )
        .filter((cityObj) => cityObj.country === selectedCountry.country);

      setCitiesDataList(allCities);
    }
  }, [selectedCountry, dataList]);

  useEffect(() => {
    if (selectedCity && selectedFrequency !== null) {
      getCurrentCityWeatherCast();
    }
    prevCityRef.current = selectedCity;
  }, [selectedCity]);

  useEffect(() => {
    if (selectedFrequency && selectedFrequency !== prevSelectedFrequency) {
      getCurrentCityWeatherCast();
    }
  }, [selectedFrequency]);

  return (
    <div
      className="h-100 w-100 position-fixed overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <SelectNav
          className={`p-4 m-4 row bg-white`}
          style={{ border: "1px solid", borderRadius: "15px" }}
          countriesDataList={countriesDataList}
          citiesDataList={citiesDataList}
          setCitiesDataList={setCitiesDataList}
          frequencyList={frequencyList}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          selectedFrequency={selectedFrequency}
          setSelectedFrequency={setSelectedFrequency}
          weatherCastBasePath={weatherCastBasePath}
          setLoading={setLoading}
        />
        <ContentView
          loading={loading}
          className={`p-4 m-4 d-flex flex-row justify-content-center align-items-center`}
          style={{
            border: "1px solid",
            borderRadius: "15px",
            backgroundColor: "#F2F2F2",
            minHeight: "500px",
          }}
          selectedCountry={selectedCountry}
          selectedCity={selectedCity}
          selectedFrequency={selectedFrequency}
          weatherData={weatherData}
        />
      </div>
    </div>
  );
}

export default Weather;
