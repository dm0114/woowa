const car_constructor = (name, location) => {
  // 주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다.
  const getName = () => name

  // 자동차의 현재 이동 상태를 출력한다.
  const getLocation = () => location

  return Object.freeze({
    getName,
    getLocation,
  })
}

export default car_constructor