import { createText } from "Utilities/utility";
import { getIcon, getDaily } from "Modules/forecastUtils";

function createDailyCard(data, units) {
  const container = document.createElement("div");
  container.classList.add("card-forecast");

  const dayText = createText(data.day);
  const weatherImage = getIcon(data.image);
  const weatherText = createText(data.weather);

  let tempUnits = "C";
  if (units !== "metric") {
    tempUnits = "F";
  }

  const temperatureText = createText(
    `${Math.round(data.temperature) + String.fromCharCode(176)}${tempUnits}`,
  );

  container.appendChild(dayText);
  container.appendChild(temperatureText);
  container.appendChild(weatherImage);
  container.appendChild(weatherText);

  return container;
}

function createCardContainer(array, units) {
  const container = document.createElement("div");
  container.classList.add("card-container");

  array.forEach((element) => {
    container.appendChild(createDailyCard(element, units));
  });

  return container;
}

function renderDailyInfo(data, city, units) {
  const daily = getDaily(data, city);
  const dailyInfo = createCardContainer(daily, units);

  const container = document.createElement("div");
  container.classList.add("bottom-panel");
  container.appendChild(dailyInfo);

  return container;
}

export default renderDailyInfo;
