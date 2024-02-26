import { createText } from "Utilities/utility";
import { getIcon } from "Modules/forecastUtils";

function renderCard(data) {
  const container = document.createElement("div");
  container.classList.add("card-forecast");

  const dayText = createText(data.day);
  const weatherImage = getIcon(data.image);
  const weatherText = createText(data.weather);
  const temperatureText = createText(
    `${Math.round(data.temperature) + String.fromCharCode(176)}C`,
  );

  container.appendChild(dayText);
  container.appendChild(weatherImage);
  container.appendChild(weatherText);
  container.appendChild(temperatureText);

  return container;
}

function renderDailyInfo(array) {
  const container = document.createElement("div");
  container.classList.add("card-container");

  array.forEach((element) => {
    container.appendChild(renderCard(element));
  });

  return container;
}

export default renderDailyInfo;
