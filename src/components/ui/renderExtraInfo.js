import { createText, createIcon } from "Utilities/utility";
import { getCurrent } from "Modules/forecastUtils";

function createInfoText(title, value) {
  const infoTitle = createText(title);
  infoTitle.classList.add("info-title");
  const infoValue = createText(value);

  const container = document.createElement("div");
  container.appendChild(infoTitle);
  container.appendChild(infoValue);

  return container;
}

function createInfoCard(image, title, value) {
  const icon = createIcon(image);
  icon.classList.add("info-icon");
  const info = createInfoText(title, value);

  const container = document.createElement("div");
  container.classList.add("info-container");
  container.appendChild(icon);
  container.appendChild(info);

  return container;
}

function renderExtraInfo(data, city, units) {
  let tempUnits = "C";
  let speedUnits = "m/s";

  if (units !== "metric") {
    tempUnits = "F";
    speedUnits = "mph";
  }

  const current = getCurrent(data, city);

  const feelsLike = createInfoCard(
    "thermostat",
    "Feels Like",
    `${current.feelsLike}${String.fromCharCode(176)}${tempUnits}`,
  );
  const humidity = createInfoCard(
    "humidity_percentage",
    "Humidity",
    `${current.humidity}%`,
  );
  const pop = createInfoCard(
    "rainy",
    "Chance of Rain",
    `${Math.round(current.pop * 100)}%`,
  );
  const windSpeed = createInfoCard(
    "air",
    "Wind Speed",
    `${current.windSpeed} ${speedUnits}`,
  );

  const infoContainer = document.createElement("div");
  infoContainer.appendChild(feelsLike);
  infoContainer.appendChild(humidity);
  infoContainer.appendChild(pop);
  infoContainer.appendChild(windSpeed);

  const container = document.createElement("div");
  container.classList.add("right-panel");
  container.appendChild(infoContainer);

  return container;
}

export default renderExtraInfo;
