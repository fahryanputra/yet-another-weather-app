import { add, format } from "date-fns";
import Forecast from "Modules/Forecast";

const currentDate = new Date();

function getCurrent(data, city) {
  const day = format(currentDate, "EEEE");
  const temperature = data.current.temp;
  const image = data.current.weather[0].main;
  const feelsLike = data.current.feels_like;
  const { humidity } = data.current;
  const { pop } = data.daily[0];
  const windSpeed = data.current.wind_speed;

  const weather = new Forecast(data.current.weather[0].description);
  weather.setCity(city);
  weather.setImage(image);
  weather.setDate(currentDate);
  weather.setDay(day);
  weather.setTemperature(temperature);
  weather.setFeelsLike(feelsLike);
  weather.setHumidity(humidity);
  weather.setPop(pop);
  weather.setWindSpeed(windSpeed);

  return weather;
}

function getDaily(data, city) {
  const array = [];

  for (let index = 1; index < data.daily.length; index += 1) {
    const element = data.daily[index];

    const date = add(currentDate, { days: index });
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

export { getCurrent, getDaily };