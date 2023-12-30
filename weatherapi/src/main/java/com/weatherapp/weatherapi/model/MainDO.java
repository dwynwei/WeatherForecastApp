package com.weatherapp.weatherapi.model;

import lombok.Data;

@Data
public class MainDO {
	private double temp;
    private double feelsLike;
    private double tempMin;
    private double tempMax;
    private int pressure;
    private int humidity;
}
