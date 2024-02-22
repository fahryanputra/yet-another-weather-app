import fetchWeather from "Modules/api";
import * as weather from "Modules/weatherUtils";

async function main() {
  const API_KEY = "90045be68e0635d15fad9cf660663a7f";
  const location = "bogor";

  const data = await fetchWeather(API_KEY, location);

  const output = weather.getCurrent(data);

  console.log(output);
}

main();
