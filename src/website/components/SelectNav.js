import React from "react";
import Select from "react-select";
import { httpHelper } from "../helper/HttpHelper";

function SelectNav({
  className,
  style,
  countriesDataList,
  citiesDataList,
  setCitiesDataList,
  frequencyList,
  selectedFrequency,
  setSelectedFrequency,
  selectedCountry,
  setSelectedCountry,
  selectedCity,
  setSelectedCity,
  weatherCastBasePath,
  loading,
  setLoading,
}) {
  const handleChangeCity = async (option) => {
    setSelectedCity(option);
    setLoading(true);
    try {
      await weatherCastBasePath.post(
        `/api/weather/setCity?city=${encodeURIComponent(option.city)}`
      );
    } catch (error) {
      console.error("Error during setCity:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeCountry = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setSelectedCity(null);
    const filteredCities = citiesDataList.filter(
      (city) => city.country === selectedOption.country
    );
    setCitiesDataList(filteredCities);
  };

  const handleChangeFrequency = async (option) => {
    setSelectedFrequency(option);
    setLoading(true);
    try {
      await weatherCastBasePath.post(
        `/api/weather/setFrequency?frequency=${encodeURIComponent(
          option.value
        )}`
      );
    } catch (error) {
      console.error("Error during setFrequency:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={className} style={style}>
      <div className="col-lg-4">
        <label className="py-2">Country</label>
        <Select
          value={selectedCountry}
          onChange={handleChangeCountry}
          getOptionLabel={(option) => option?.country}
          getOptionValue={(option) => option?.id}
          options={countriesDataList}
          placeholder="Select a Country..."
        />
      </div>
      <div className="col-lg-4">
        <label className="py-2">City</label>
        <Select
          value={selectedCity}
          onChange={handleChangeCity}
          getOptionLabel={(option) => option?.city}
          getOptionValue={(option) => option?.id}
          options={citiesDataList}
          placeholder={
            !selectedCountry
              ? "Waiting for Country Selection..."
              : "Select a city..."
          }
          isDisabled={!selectedCountry}
        />
      </div>
      <div className="col-lg-4">
        <label className="py-2">Frequency</label>
        <Select
          value={selectedFrequency}
          onChange={handleChangeFrequency}
          options={frequencyList}
          getOptionLabel={(option) => option?.label}
          getOptionValue={(option) => option?.id}
          placeholder={
            !selectedCity
              ? "Waiting for City Selection..."
              : "Select a Frequency..."
          }
          isDisabled={!selectedCity}
        />
      </div>
    </div>
  );
}

export default SelectNav;
