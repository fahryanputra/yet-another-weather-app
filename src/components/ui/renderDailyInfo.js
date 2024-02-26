import * as utils from "Utilities/utility";

function renderCard(data) {
  const container = document.createElement("div");
  container.classList.add("card-forecast");

  const dayText = utils.createText(data.day);
  const weatherImage = utils.createWeatherIcon(data.image);
  const weatherText = utils.createText(data.weather);
  const temperatureText = utils.createText(
    `${data.temperature + String.fromCharCode(176)}C`,
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

  console.log(array);

  return container;
}

export default renderDailyInfo;
