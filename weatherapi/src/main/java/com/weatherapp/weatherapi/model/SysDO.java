package com.weatherapp.weatherapi.model;

import lombok.Data;

@Data
public class SysDO {
	private int type;
    private int id;
    private String country;
    private long sunrise;
    private long sunset;
}
