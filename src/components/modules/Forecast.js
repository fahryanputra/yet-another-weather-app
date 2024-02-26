class Forecast {
  constructor(weather) {
    this.city = "Unavailable";
    this.date = "Unavailable";
    this.day = "Unavailable";
    this.image = "Unavailable";
    this.weather = weather;
    this.temperature = "Unavailable";
    this.feelsLike = "Unavailable";
    this.humidity = "Unavailable";
    this.pop = "Unavailable";
    this.windSpeed = "Unavailable";
  }

  // Getter
  getCity() {
    return this.city;
  }

  getDate() {
    return this.date;
  }

  getDay() {
    return this.day;
  }

  getImage() {
    return this.image;
  }

  getWeather() {
    return this.weather;
  }

  getTemperature() {
    return this.temperature;
  }

  getFeelsLike() {
    return this.feelsLike;
  }

  getHumidity() {
    return this.humidity;
  }

  getPop() {
    return this.pop;
  }

  getWindSpeed() {
    return this.windSpeed;
  }

  // Setter
  setCity(city) {
    this.city = city;
  }

  setDate(date) {
    this.date = date;
  }

  setDay(day) {
    this.day = day;
  }

  setImage(image) {
    this.image = image;
  }

  setWeather(weather) {
    this.weather = weather;
  }

  setTemperature(temperature) {
    this.temperature = temperature;
  }

  setFeelsLike(feelsLike) {
    this.feelsLike = feelsLike;
  }

  setHumidity(humidity) {
    this.humidity = humidity;
  }

  setPop(pop) {
    this.pop = pop;
  }

  setWindSpeed(windSpeed) {
    this.windSpeed = windSpeed;
  }
}

export default Forecast;
