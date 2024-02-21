async function getWeatherData(location) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=7a98c4b3d0ef4bcc94935220242102&q=${location}&aqi=no
          `,
    { mode: "cors" },
  );
  const data = await response.json();

  return data;
}

const location = "bogor";

getWeatherData(location).then((result) => {
  console.log(result);
});
