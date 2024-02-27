import { createText } from "Utilities/utility";
import { getIcon, getDaily } from "Modules/forecastUtils";

function createDailyCard(data) {
  const container = document.createElement("div");
  container.classList.add("card-forecast");

  const dayText = createText(data.day);
  const weatherImage = getIcon(data.image);
  const weatherText = createText(data.weather);
  const temperatureText = createText(
    `${Math.round(data.temperature) + String.fromCharCode(176)}C`,
  );

  container.appendChild(dayText);
  container.appendChild(temperatureText);
  container.appendChild(weatherImage);
  container.appendChild(weatherText);

  return container;
}

function createCardContainer(array) {
  const container = document.createElement("div");
  container.classList.add("card-container");

  array.forEach((element) => {
    container.appendChild(createDailyCard(element));
  });

  return container;
}

function renderDailyInfo(data, city) {
  const daily = getDaily(data, city);
  const dailyInfo = createCardContainer(daily);

  const container = document.createElement("div");
  container.classList.add("bottom-panel");
  container.appendChild(dailyInfo);

  return container;
}

export default renderDailyInfo;
