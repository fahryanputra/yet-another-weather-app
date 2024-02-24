import fetchWeather from "Modules/api";
import * as forecast from "Modules/forecastUtils";

async function main() {
  const API_KEY = "90045be68e0635d15fad9cf660663a7f";
  const location = "bogor";

  const data = await fetchWeather(API_KEY, location);
  const current = forecast.getCurrent(data);
  const daily = forecast.getDaily(data);

  console.log(current);
  console.log(daily);
}

main();
