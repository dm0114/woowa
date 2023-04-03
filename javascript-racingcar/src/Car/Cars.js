class Cars {
  #cars = []

  constructor() {
    this.#cars = []
  }

  setCars(cars) {
    this.#cars = [...cars]
  }

  getCars() {
    return this.#cars
  }
}

module.exports = {
  Cars
}