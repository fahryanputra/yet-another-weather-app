class Forecast {
  constructor(weather) {
    this.city = "Unavailable";
    this.date = "Unavailable";
    this.day = "Unavailable";
    this.image = "Unavailable";
    this.weather = weather;
    this.temperature = "Unavailable";
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
    this.image = image.toLocaleLowerCase();
  }

  setWeather(weather) {
    this.weather = weather;
  }

  setTemperature(temperature) {
    this.temperature = temperature;
  }
}

export default Forecast;
