# WeatherApp API

This is the backend service for the WeatherApp, developed using `Java 17` and `Spring Boot framework version 3.2.1`.

## Configuration

The application is configured in the `application.yml`. Ensure to replace `OPENWEATHERMAP_KEY` with your actual OpenWeatherMap API key.

```yaml
weather:
  apiKey: 'OPENWEATHERMAP_KEY' # Replace with your OpenWeatherMap API key
  defaultCity: 'Istanbul'
  fetchInterval: 'MINUTELY'
  
server:
  port: 8080
```


## API Endpoints

`WeatherApiController` offers the following endpoints:

### GET `/current`

Retrieves current weather information for the default city. The response includes:
- `CloudsDO`
- `CoordinatesDO`
- `MainDO`
- `SysDO`
- `WeatherDO`
- `WindDO`
  
Encapsulated within `ResponseDO`.

### POST `/setFrequency`

Sets the frequency for weather data updates. Accepts `Secondly`, `Minutely`, `Hourly`. See `Frequency.enum` for more.

### POST `/setCity`

Updates the default city for fetching weather data. Accepts city names in English.

Data fetching is performed from `http://api.openweathermap.org/data/2.5/weather`.

For more information, visit [OpenWeatherMap Current Weather Documentation](https://openweathermap.org/current).

## OpenAPI Documentation

The project uses OpenAPI for documentation. Visit [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html) for the full API documentation.
