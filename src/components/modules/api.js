async function fetchCoord(key, location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`,
    { mode: "cors" },
  );

  const data = await response.json();
  const city = data.name;

  const getData = () => data;
  const getCity = () => city;

  return { getData, getCity };
}

async function fetchWeather(key, location) {
  const api = await fetchCoord(key, location);
  const coord = api.getData();
  const city = api.getCity();

  const { lat } = coord.coord;
  const { lon } = coord.coord;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${key}`,
    { mode: "cors" },
  );

  const data = await response.json();
  const getData = () => data;
  const getCity = () => city;

  return { getData, getCity };
}

export default fetchWeather;
