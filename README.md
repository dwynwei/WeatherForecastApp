# WeatherForecast UI

This project is a user interface for the WeatherForecast application. It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started with Create React App

You can find more information on how to perform common tasks in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Using the WeatherForecast UI

To use the WeatherForecast UI, follow these steps:

1. **Select Country**: Start by selecting a country from the dropdown.
2. **Select City**: After selecting a country, choose a city.
3. **Select Frequency**: Finally, select the frequency for weather updates.

The data for countries and cities is fetched from `countriesnow.space`, and weather updates are retrieved from a local server running at `localhost:8080`.

## Displayed Information

Once all selections are set and data is available, the following weather information will be displayed:

- **Weather**: Conditions like Rain, Sunny, Clouds, etc.
- **Temperature**: Displayed in Celsius.
- **Humidity**: The humidity level.
- **Sunrise and Sunset**: Times are displayed in AM/PM format.

## Available Scripts

In the project directory, you can run several scripts:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload with your changes.

### `npm run build`

Builds the app for production to the `build` folder. It bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting, Analyzing the Bundle Size, Making a Progressive Web App, Advanced Configuration, Deployment, and Troubleshooting

Additional sections on code splitting, analyzing the bundle size, creating a progressive web app, advanced configuration, deployment, and troubleshooting can be found in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

