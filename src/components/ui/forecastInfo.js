import * as utils from "Utilities/utility";

function renderForecastInfo(array) {
  array.forEach((element) => {});
}

function renderForecastCard(data) {
  const container = document.createElement("div");
  container.classList.add("card-forecast");

  const dayText = utils.createText(data.day);

  container.appendChild(dayText);
}
