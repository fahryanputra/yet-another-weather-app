import fetchWeather from "Modules/api";
import renderDailyInfo from "UI/renderDailyInfo";
import * as forecast from "Modules/forecastUtils";

async function main() {
  const API_KEY = "90045be68e0635d15fad9cf660663a7f";
  const location = "bogor";

  const data = await fetchWeather(API_KEY, location);
  // const current = forecast.getCurrent(data);
  const daily = forecast.getDaily(data);

  const container = document.querySelector(".content");
  container.appendChild(renderDailyInfo(daily));
}

main();
