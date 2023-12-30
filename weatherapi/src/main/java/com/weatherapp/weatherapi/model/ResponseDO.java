package com.weatherapp.weatherapi.model;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class ResponseDO {
	private CoordinatesDO coord;
    private List<WeatherDO> weather;
    private MainDO main;
    private WindDO wind;
    private CloudsDO clouds;
    private SysDO sys;
    private int visibility;
    private long dt;
    private String name;
    private int cod;
}
