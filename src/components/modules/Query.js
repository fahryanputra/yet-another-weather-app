class Query {
  constructor(city) {
    this.city = city;
    this.key = "90045be68e0635d15fad9cf660663a7f";
    this.units = "metric";
  }

  // Getter
  getCity() {
    return this.city;
  }

  getKey() {
    return this.key;
  }

  getUnits() {
    return this.units;
  }

  // Setter
  setCity(city) {
    this.city = city;
  }

  setKey(key) {
    this.key = key;
  }

  setUnits(units) {
    this.units = units;
  }
}

export default Query;
