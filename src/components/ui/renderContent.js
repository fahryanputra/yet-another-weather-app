import renderCurrentWeather from "UI/renderCurrentWeather";
import renderDailyInfo from "UI/renderDailyInfo";
import renderExtraInfo from "UI/renderExtraInfo";
import { getForecast } from "Modules/forecastUtils";

async function renderContent(query) {
  const forecast = await getForecast(query);

  if (forecast === 1) {
    return;
  }

  const data = forecast.getData();
  const city = forecast.getCity();
  const units = query.getUnits();

  const current = renderCurrentWeather(data, city, units);
  const info = renderExtraInfo(data, city, units);
  const daily = renderDailyInfo(data, city, units);

  const content = document.querySelector(".content");
  content.textContent = "";
  content.appendChild(current);
  content.appendChild(info);
  content.appendChild(daily);
}

export default renderContent;
