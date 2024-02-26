class Forecast {
  constructor(weather) {
    this.date = "Unavailable";
    this.day = "Unavailable";
    this.image = "Unavailable";
    this.weather = weather;
    this.temperature = "Unavailable";
  }

  // Getter
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
