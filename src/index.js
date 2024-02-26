import fetchWeather from "Modules/api";
import renderDailyInfo from "UI/renderDailyInfo";
import * as forecast from "Modules/forecastUtils";

async function main() {
  const API_KEY = "90045be68e0635d15fad9cf660663a7f";
  const location = "bogor";

  const fetch = await fetchWeather(API_KEY, location);
  const data = fetch.getData();
  const city = fetch.getCity();

  // const current = forecast.getCurrent(data);
  const daily = forecast.getDaily(data, city);

  const container = document.querySelector(".content");
  container.appendChild(renderDailyInfo(daily));

  console.log(forecast.getCurrent(data, city));
}

main();
