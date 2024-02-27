import renderCurrentWeather from "UI/renderCurrentWeather";
import renderDailyInfo from "UI/renderDailyInfo";
import renderExtraInfo from "UI/renderExtraInfo";
import { getForecast } from "Modules/forecastUtils";

async function renderContent(location = "Jakarta") {
  const forecast = await getForecast(location);
  const data = forecast.getData();
  const city = forecast.getCity();

  const current = renderCurrentWeather(data, city);
  const info = renderExtraInfo(data, city);
  const daily = renderDailyInfo(data, city);

  const content = document.querySelector(".content");
  content.appendChild(current);
  content.appendChild(info);
  content.appendChild(daily);
}

export default renderContent;
