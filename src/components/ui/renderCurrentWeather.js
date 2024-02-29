import { createText, capitalizeEachWord } from "Utilities/utility";
import { format } from "date-fns";
import { getCurrent, getIcon } from "Modules/forecastUtils";

function createLocationInfo(data, city) {
  const container = document.createElement("div");
  container.classList.add("location-container");

  const location = createText(city);
  location.classList.add("city-text");

  const today = new Date().toLocaleString("en-US", {
    timeZone: data.timezone,
  });
  const time = createText(format(today, "p"));
  time.classList.add("time-text");
  const day = createText(format(today, "EEEE"));
  const date = createText(format(today, "d MMMM yyyy"));

  const dateContainer = document.createElement("div");
  dateContainer.appendChild(day);
  dateContainer.appendChild(date);

  container.appendChild(location);
  container.appendChild(time);
  container.appendChild(dateContainer);

  return container;
}

function createWeatherInfo(data, city, units) {
  const container = document.createElement("div");
  container.classList.add("weather-container");

  const current = getCurrent(data, city);

  const weather = createText(capitalizeEachWord(current.weather));
  const image = getIcon(current.image);
  image.classList.add("weather-icon");

  let tempUnits = "C";
  if (units !== "metric") {
    tempUnits = "F";
  }

  const temperature = createText(
    `${current.temperature}${String.fromCharCode(176)}${tempUnits}`,
  );
  temperature.classList.add("temperature-text");

  const weatherContainer = document.createElement("div");
  weatherContainer.appendChild(image);
  weatherContainer.appendChild(weather);

  container.appendChild(weatherContainer);
  container.appendChild(temperature);

  return container;
}

function renderCurrentWeather(data, city, units) {
  const container = document.createElement("div");
  container.classList.add("left-panel");

  const locationInfo = createLocationInfo(data, city);
  const weatherInfo = createWeatherInfo(data, city, units);

  container.appendChild(locationInfo);
  container.appendChild(weatherInfo);

  return container;
}

export default renderCurrentWeather;
