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
  const coordResponse = await fetchCoord(key, location);
  const coordData = coordResponse.getData();
  const coordCity = coordResponse.getCity();

  const latitude = coordData.coord.lat;
  const longitude = coordData.coord.lon;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${key}`,
    { mode: "cors" },
  );

  const data = await response.json();

  const getData = () => data;
  const getCity = () => coordCity;

  return { getData, getCity };
}

export default fetchWeather;
