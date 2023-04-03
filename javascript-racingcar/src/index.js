// 프로그래밍 요구사항
//  코드 스타일 가이드에 따라 컨벤션을 준수하며 개발한다.
//  변수 선언시 var를 사용하지 않는다. let, const를 사용한다.
//  전역 변수를 만들지 않는다.
//  축약하지 않는다.
//  하드 코딩된 값 대신에 의미 있는 상수를 활용한다.
//  동등 연산자는 ===로만 사용한다.
//  함수(또는 메서드)의 길이가 10라인을 넘어가지 않도록 구현한다.
//  함수(또는 메서드)가 한 가지 일만 하도록 만든다.
//  함수(또는 메서드)의 들여쓰기 depth는 2단계까지만 허용한다.
// 예를 들어 while문 안에 if문이 있으면 depth는 2단계 이다.
// 힌트) 함수(또는 메서드) 분리는 들여쓰기 depth를 줄이는 좋은 방법이다.
//  else 예약어를 쓰지 않는다.
//  도메인 로직과 UI 로직을 분리한다.
//  모든 도메인 로직에 단위 테스트를 구현한다. (UI 로직은 제외)

const { createCars } = require('./Car/Car');
const { Cars } = require('./Car/Cars');
const { game, winnerWinnerChickenDinner } = require('./controller');
const { getInput, nameValidator, splitNames, numberValidator } = require('./IO');

const mains = async () => {
  const carList = new Cars()

  // 이름 입력 받기
  const names = await getInput(nameValidator, '자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.', '5자 이하의 글자를 입력해')
  carList.setCars(createCars(splitNames(names)))
  
  // 자연수 입력 받기
  const gameCounts = await getInput(numberValidator, '게임 횟수는 자연수로 입력해주세요' ,'자연수를 입력해')
  
  for (let i = 1; i <= gameCounts; i++) {
    console.log(`SET ${i}`)
    game(carList.getCars())
    for (const car of carList.getCars()) {
      console.log(`${car.getName()}: ${car.getLocation()}`)
    }
    console.log('-')
  }

  console.log('{{WINNERWINNERCHICKENDINNER!!}}')
  winnerWinnerChickenDinner(carList.getCars())
}

mains()
