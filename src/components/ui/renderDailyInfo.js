import { createText, capitalizeEachWord } from "Utilities/utility";
import { getIcon, getDaily } from "Modules/forecastUtils";

function createDailyCard(data, units) {
  const container = document.createElement("div");
  container.classList.add("card-forecast");

  const dayText = createText(data.day);
  dayText.classList.add("day-text");
  const weatherImage = getIcon(data.image);
  weatherImage.classList.add("weather-icon");
  const weatherText = createText(capitalizeEachWord(data.weather));

  let tempUnits = "C";
  if (units !== "metric") {
    tempUnits = "F";
  }

  const temperatureText = createText(
    `${Math.round(data.temperature) + String.fromCharCode(176)}${tempUnits}`,
  );

  const weatherContainer = document.createElement("div");
  weatherContainer.appendChild(weatherImage);
  weatherContainer.appendChild(weatherText);

  container.appendChild(dayText);
  container.appendChild(temperatureText);
  container.appendChild(weatherContainer);

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
