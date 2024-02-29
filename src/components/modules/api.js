async function fetchCoord(query) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${query.getCity()}&appid=${query.getKey()}`,
    { mode: "cors" },
  );

  const data = await response.json();
  const city = data.name;
  const code = data.cod;

  if (code !== 200) {
    const { message } = data;

    alert(message);

    return 1;
  }

  const getData = () => data;
  const getCity = () => city;

  return { getData, getCity };
}

async function fetchWeather(query) {
  const api = await fetchCoord(query);

  if (api === 1) {
    return 1;
  }

  const coord = api.getData();
  const city = api.getCity();

  const { lat } = coord.coord;
  const { lon } = coord.coord;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${query.getUnits()}&appid=${query.getKey()}`,
    { mode: "cors" },
  );

  const data = await response.json();
  const getData = () => data;
  const getCity = () => city;

  return { getData, getCity };
}

export default fetchWeather;
