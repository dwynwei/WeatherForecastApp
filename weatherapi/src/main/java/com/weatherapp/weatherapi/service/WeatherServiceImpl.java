package com.weatherapp.weatherapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.weatherapp.weatherapi.config.model.WeatherConfig;
import com.weatherapp.weatherapi.model.ResponseDO;

@Service
public class WeatherServiceImpl implements WeatherService {

	private final RestTemplate restTemplate;
	private final WeatherConfig weatherConfig;
	
	 /**
     * Constructor for WeatherService
     *
     * @param restTemplate : The RestTemplate used for HTTP requests
     * @param weatherConfig : Openweathermap configuration
     */

	@Autowired
	public WeatherServiceImpl(RestTemplate restTemplate, WeatherConfig weatherConfig) {
		this.restTemplate = restTemplate;
		this.weatherConfig = weatherConfig;
	}

	/**
     * Fetches weather data for the specified city using OpenWeatherMap API
     * 
     * @param city : The name of the city for requesting via OpenWeatherMap API
     * @return ResponseDO object containing weather data
     */
	
	@Override
	public ResponseDO getWeatherForCity(String city) {
		String url = UriComponentsBuilder
                .fromHttpUrl("http://api.openweathermap.org/data/2.5/weather")
                .queryParam("q", city)
                .queryParam("appid", weatherConfig.getApiKey())
                .toUriString();

        return restTemplate.getForObject(url, ResponseDO.class);
	}

}
