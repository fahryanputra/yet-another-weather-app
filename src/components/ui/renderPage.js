import renderCurrentWeather from "UI/renderCurrentWeather";
import renderDailyInfo from "UI/renderDailyInfo";
import renderExtraInfo from "UI/renderExtraInfo";
import { getForecast } from "Modules/forecastUtils";

async function renderPage() {
  const API_KEY = "90045be68e0635d15fad9cf660663a7f";
  const location = "bogor";

  const forecast = await getForecast(API_KEY, location);
  const data = forecast.getData();
  const city = forecast.getCity();

  const current = renderCurrentWeather(data, city);
  const info = renderExtraInfo(data, city);
  const daily = renderDailyInfo(data, city);

  const container = document.querySelector(".content");
  container.appendChild(current);
  container.appendChild(info);
  container.appendChild(daily);

  return container;
}

export default renderPage;
