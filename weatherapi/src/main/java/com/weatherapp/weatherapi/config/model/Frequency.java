package com.weatherapp.weatherapi.config.model;

public enum Frequency {
	SECONDLY(1),
    MINUTELY(60),
    HOURLY(3600);

    private final int period;

    Frequency(int periodInSeconds) {
        this.period = periodInSeconds;
    }

    public long getPeriodInSeconds() {
        return period;
    }
}
