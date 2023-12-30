package com.weatherapp.weatherapi.service;

import com.weatherapp.weatherapi.model.ResponseDO;

public interface WeatherService {
	public ResponseDO getWeatherForCity(String city);
}
