package com.weatherapp.weatherapi.service;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.weatherapp.weatherapi.config.model.Frequency;
import com.weatherapp.weatherapi.config.model.WeatherConfig;
import com.weatherapp.weatherapi.model.ResponseDO;

@Service
public class OpenWeatherMapServiceImpl implements OpenWeatherMapService {

	private final WeatherService weatherService;
    private final ScheduledExecutorService scheduledExecutorService;
    private final WeatherConfig weatherConfig;

    private volatile String currentCity;
    
    // Map for converting Turkish chars to English equivalents
    private static final Map<Character, Character> turkishToEnglishCharMap = new HashMap<>();
    static {
        turkishToEnglishCharMap.put('ğ', 'g');
        turkishToEnglishCharMap.put('Ğ', 'G');
        turkishToEnglishCharMap.put('ü', 'u');
        turkishToEnglishCharMap.put('Ü', 'U');
        turkishToEnglishCharMap.put('ş', 's');
        turkishToEnglishCharMap.put('Ş', 'S');
        turkishToEnglishCharMap.put('ı', 'i');
        turkishToEnglishCharMap.put('İ', 'I');
        turkishToEnglishCharMap.put('ö', 'o');
        turkishToEnglishCharMap.put('Ö', 'O');
        turkishToEnglishCharMap.put('ç', 'c');
        turkishToEnglishCharMap.put('Ç', 'C');
    }

    
    /**
     * Constructor for OpenWeatherMapServiceImpl.
     *
     * @param weatherService : The service to fetch weather data
     * @param scheduledExecutorService : The service for executing scheduling task
     * @param weatherConfig : Openweathermap configuration
     */
    
    @Autowired
    public OpenWeatherMapServiceImpl(WeatherService weatherService, ScheduledExecutorService scheduledExecutorService, WeatherConfig weatherConfig) {
        this.weatherService = weatherService;
        this.scheduledExecutorService = scheduledExecutorService;
        this.weatherConfig = weatherConfig;
        this.currentCity = weatherConfig.getDefaultCity();
        scheduleWeather(Frequency.valueOf(weatherConfig.getFetchInterval()));
    }

    /**
     * Schedules a task to fetch weather data at fixed rate based on the given frequency
     *
     * @param frequency : The frequency to fetch weather data.
     */
    
	@Override
	public void scheduleWeather(Frequency frequency) {
		scheduledExecutorService.scheduleAtFixedRate(() -> {
            try {
                ResponseDO weather = weatherService.getWeatherForCity(currentCity);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }, 0, frequency.getPeriodInSeconds(), TimeUnit.SECONDS);

	}
	
	/**
     * Sets the current city for which the weather data is to be fetched
     *
     * @param city : Name of the city.
     */
	
	@Override
	public void setCurrentCity(String city) {		
		this.currentCity = convertTurkishCharsToEnglish(city);		
	}

	/**
     * Gets the current city for which the weather data is fetched
     *
     * @return The current city name(Fixed "Istanbul" as default)
     */
	
	@Override
	public String getCurrentCity() {
		return this.currentCity;
	}
	
	/**
     * Converts Turkish characters in the input string to their English equivalents.
     *
     * @param input : Value that can contain Turkish characters to translate into English characters
     * @return The string with converted characters
     */
	private String convertTurkishCharsToEnglish(String input) {
        StringBuilder sb = new StringBuilder();
        for (char c : input.toCharArray()) {
            sb.append(turkishToEnglishCharMap.getOrDefault(c, c));
        }
        return sb.toString();
    }
}
