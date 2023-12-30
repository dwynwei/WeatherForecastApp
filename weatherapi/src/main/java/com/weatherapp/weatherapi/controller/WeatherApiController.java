package com.weatherapp.weatherapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.weatherapp.weatherapi.config.model.Frequency;
import com.weatherapp.weatherapi.model.ResponseDO;
import com.weatherapp.weatherapi.service.OpenWeatherMapService;
import com.weatherapp.weatherapi.service.WeatherService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/weather")
@Tag(name = "Openweathermap Api operations", description = "API for managing and fetching weather data via City information with designated time intervals")
public class WeatherApiController {

	private OpenWeatherMapService openWeatherMapService;
	private WeatherService weatherService;

	@Autowired
	public WeatherApiController(OpenWeatherMapService openWeatherMapService, WeatherService weatherService) {
		this.openWeatherMapService = openWeatherMapService;
		this.weatherService = weatherService;
	}

	@PostMapping("/setFrequency")
	@Operation(summary = "Set the frequency of weather data fetching from Openweathermap Api", description = "Sets the interval at which the weather data should be fetched from Openweathermap Api(Allowed parameters: Secondly, Minutely, Hourly)")
	@ApiResponse(responseCode = "200", description = "Successfully set the frequency")
	@ApiResponse(responseCode = "500", description = "Internal server error")
	public ResponseEntity<?> setFrequency(@RequestParam("frequency") String frequencyStr) {
		try {
			Frequency frequency = Frequency.valueOf(frequencyStr.toUpperCase());
			openWeatherMapService.scheduleWeather(frequency);
			return ResponseEntity.ok("Fetch frequency set to " + frequency);
		} catch (IllegalArgumentException e) {
			return ResponseEntity.badRequest().body("Invalid frequency value: " + frequencyStr);
		}
	}

	@PostMapping("/setCity")
	@Operation(summary = "Set the city name for weather data", description = "Updates the current city to fetch weather data from Openweathermap Api")
	@ApiResponse(responseCode = "200", description = "Successfully set the current city")
	@ApiResponse(responseCode = "500", description = "Internal server error")
	public ResponseEntity<?> setCity(@RequestParam("city") String city) {
		try {
			openWeatherMapService.setCurrentCity(city);
			return ResponseEntity.ok("City set to " + city);
		} catch (IllegalArgumentException e) {
			return ResponseEntity.badRequest().body("Invalid City name: " + city);
		}
	}

	@GetMapping("/current")
	@Operation(summary = "Get current weather data", description = "Fetches the current weather data for the set city")
	@ApiResponse(responseCode = "200", description = "Successfully fetched the weather data")
	@ApiResponse(responseCode = "500", description = "Internal server error")
	public ResponseEntity<?> getCurrentWeather() {
		try {
			ResponseDO weather = weatherService.getWeatherForCity(openWeatherMapService.getCurrentCity());
			return ResponseEntity.ok(weather);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error during fetch weather data");
		}
	}

}
