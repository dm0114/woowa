class Car {
  #name;
  #location;

  constructor(name) {
    // 자동차 객체를 자동차 이름과 위치 상태를 갖도록 구현한다.
    this.#name = name
    this.#location = 0
  }

  // 주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다.
  setName(name) {
    this.#name = name
  }

  getName() {
    return this.#name;
  }

  // 자동차의 현재 이동 상태를 출력한다.
  getLocation() {
    return this.#location;
  }

  move() {
    this.#location++;
  }
}

// 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
// 모든 자동차의 현재 이동 상태를 출력한다.
const printCarLocations = (cars) => {
  for (const car of cars) {
    console.log(`${car.getName()}: ${car.getLocation()}`)
  }
}

// 입력받은 이름을 기반으로 자동차들을 생성한다.
const createCar = (name) => new Car(name)

// 자동차들 생성
const createCars = (cars) => {
  const carList = []
  for (const car of cars) {
    carList.push(createCar(car))
  }
  return carList
}

module.exports = {
  createCars
};