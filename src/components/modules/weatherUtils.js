import { add, format } from "date-fns";
import Weather from "Modules/Weather";

function getCurrent(data) {
  const date = new Date();
  const day = format(date, "EEEE");
  const temperature = data.current.temp;

  const weather = new Weather(data.current.weather[0].description);
  weather.setDate(date);
  weather.setDay(day);
  weather.setTemperature(temperature);

  return weather;
}

function getDaily(data) {
  const array = [];
  const currentDate = new Date();

  for (let index = 0; index < data.daily.length; index++) {
    const element = data.daily[index];

    const date = add(currentDate, { days: index });
    const day = format(date, "EEEE");
    const temperature = element.temp.day;

    const weather = new Weather(element.weather[0].description);
    weather.setDate(date);
    weather.setDay(day);
    weather.setTemperature(temperature);

    array.push(weather);
  }

  return array;
}

export { getCurrent, getDaily };
