// 0부터 9까지 랜덤으로 숫자를 발생시킨다.
const createRandomNumber = () => Math.floor(Math.random() * 10);

// 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
const isValidate = (value) => value >= 4 ? true : false

// 자동차가 이동할지 시도한다.
const tryMove = (car, value) => { if (isValidate(value)) car.move() }

// 입력받은 시도 횟수 만큼 모든 자동차의 이동을 시도한다.
const game = (cars) => {
  for (const car of cars) {
    const value = createRandomNumber()
    tryMove(car, value)
  }
}

// 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
// 최종 우승자를 판별한다.
const checkWinner = (cars) => {
  const winnerList = []
  const sortedCars = [...cars].sort((a, b) => b.getLocation() - a.getLocation())
  const maxLocation = sortedCars[0].getLocation()
  sortedCars.every(car => {
    if (car.getLocation() === maxLocation) {
      winnerList.push(car.getName())
      return true
    }
    return false
  })
  return winnerList
}

// 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
// 최종 우승자의 이름을 출력한다.
const printWinnerName = (winnerNames) => console.log(winnerNames.join(', '))

const winnerWinnerChickenDinner = (cars) => {
  printWinnerName(checkWinner(cars))
}

module.exports = {
  game,
  winnerWinnerChickenDinner
};