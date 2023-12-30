package com.weatherapp.weatherapi.config.model;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
@ConfigurationProperties(prefix = "weather")
public class WeatherConfig {
	private String apiKey;
    private String defaultCity;
    private String fetchInterval;
}
