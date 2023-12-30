package com.weatherapp.weatherapi.service;

import com.weatherapp.weatherapi.config.model.Frequency;

public interface OpenWeatherMapService {
	public void scheduleWeather(Frequency frequency);
	public void setCurrentCity(String city);
	public String getCurrentCity();
}
