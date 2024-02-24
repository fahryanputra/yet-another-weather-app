async function fetchCoord(key, location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`,
    { mode: "cors" },
  );
  const data = await response.json();

  return data;
}

async function fetchWeather(key, location) {
  const coordResponse = await fetchCoord(key, location);
  const latitude = coordResponse.coord.lat;
  const longitude = coordResponse.coord.lon;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${key}`,
    { mode: "cors" },
  );

  const data = await response.json();

  return data;
}

export default fetchWeather;
