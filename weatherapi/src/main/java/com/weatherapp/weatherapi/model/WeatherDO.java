package com.weatherapp.weatherapi.model;

import lombok.Data;

@Data
public class WeatherDO {
	private int id;
    private String main;
    private String description;
    private String icon;
}
