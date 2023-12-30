package com.weatherapp.weatherapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.weatherapp.weatherapi.config.model.WeatherConfig;

@SpringBootApplication
@EnableConfigurationProperties(WeatherConfig.class)
public class WeatherapiApplication {

	public static void main(String[] args) {
		SpringApplication.run(WeatherapiApplication.class, args);
	}

}
