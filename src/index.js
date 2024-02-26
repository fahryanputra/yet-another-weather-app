import "Styles/style.css";
import fetchWeather from "Modules/api";
import renderDailyInfo from "UI/renderDailyInfo";
import * as forecast from "Modules/forecastUtils";

async function main() {
  const API_KEY = "90045be68e0635d15fad9cf660663a7f";
  const location = "bogor";

  const api = await fetchWeather(API_KEY, location);
  const data = api.getData();
  const city = api.getCity();

  const daily = forecast.getDaily(data, city);
  const container = document.querySelector(".bottom-panel");
  container.appendChild(renderDailyInfo(daily));
}

main();
