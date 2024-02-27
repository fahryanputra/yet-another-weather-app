import { createText } from "Utilities/utility";
import { format } from "date-fns";
import { getCurrent, getIcon } from "Modules/forecastUtils";

function createLocationInfo(city) {
  const container = document.createElement("div");
  container.classList.add("location-container");

  const location = createText(city);

  const today = new Date();
  const time = createText(format(today, "p"));
  const day = createText(format(today, "EEEE"));
  const date = createText(format(today, "d MMMM yyyy"));

  container.appendChild(location);
  container.appendChild(time);
  container.appendChild(day);
  container.appendChild(date);

  return container;
}

function createWeatherInfo(data, city) {
  const container = document.createElement("div");
  container.classList.add("weather-container");

  const current = getCurrent(data, city);

  const weather = createText(current.weather);
  const image = getIcon(current.image);
  const temperature = createText(
    `${current.temperature}${String.fromCharCode(176)}C`,
  );

  container.appendChild(temperature);
  container.appendChild(image);
  container.appendChild(weather);

  return container;
}

function renderCurrentWeather(data, city) {
  const container = document.createElement("div");
  container.classList.add("left-panel");

  const locationInfo = createLocationInfo(city);
  const weatherInfo = createWeatherInfo(data, city);

  container.appendChild(locationInfo);
  container.appendChild(weatherInfo);

  return container;
}

export default renderCurrentWeather;
