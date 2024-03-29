import { createIcon } from "Utilities/utility";
import { add, format } from "date-fns";
import fetchWeather from "Modules/api";
import Forecast from "Modules/Forecast";

const currentDate = new Date();

async function getForecast(query) {
  const api = await fetchWeather(query);

  if (api === 1) {
    return 1;
  }

  const data = api.getData();
  const city = api.getCity();

  const getData = () => data;
  const getCity = () => city;

  return { getData, getCity };
}

function getCurrent(data, city) {
  const day = format(currentDate, "EEEE");
  const temperature = data.current.temp;
  const image = data.current.weather[0].main;
  const feelsLike = data.current.feels_like;
  const { humidity } = data.current;
  const { pop } = data.daily[0];
  const windSpeed = data.current.wind_speed;
  const { timezone } = data;

  const weather = new Forecast(data.current.weather[0].description);
  weather.setCity(city);
  weather.setImage(image);
  weather.setDate(currentDate);
  weather.setDay(day);
  weather.setTemperature(Math.round(temperature));
  weather.setFeelsLike(Math.round(feelsLike));
  weather.setHumidity(humidity);
  weather.setPop(pop);
  weather.setWindSpeed(windSpeed);
  weather.setTimezone(timezone);

  return weather;
}

function getDaily(data, city) {
  const array = [];

  for (let index = 1; index < data.daily.length; index += 1) {
    const element = data.daily[index];

    const date = add(
      currentDate.toLocaleString("en-US", {
        timeZone: data.timezone,
      }),
      { days: index },
    );
    const day = format(date, "EEEE");
    const image = element.weather[0].main;
    const temperature = element.temp.day;

    const weather = new Forecast(element.weather[0].description);
    weather.setCity(city);
    weather.setImage(image);
    weather.setDate(date);
    weather.setDay(day);
    weather.setTemperature(temperature);

    array.push(weather);
  }

  return array;
}

function getIcon(text) {
  switch (text.toLocaleLowerCase()) {
    case "thunderstorm":
      return createIcon(text);
    case "drizzle":
      return createIcon("rainy");
    case "rain":
      return createIcon("rainy");
    case "snow":
      return createIcon("weather_snowy");
    case "atmosphere":
    case "mist":
    case "smoke":
    case "haze":
    case "dust":
    case "fog":
    case "sand":
    case "ash":
    case "squall":
      return createIcon("foggy");
    case "tornado":
      return createIcon("tornado");
    case "clear":
      return createIcon("clear_day");
    case "clouds":
      return createIcon("cloud");
    default:
      return "Image not found";
  }
}

export { getForecast, getCurrent, getDaily, getIcon };
