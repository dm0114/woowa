// 메인 함수에서 하나의 함수를 실행하여 

import Constants from "./Constants.js";

// 두 코드 비교해보기
const validators = () => {
  const nameRegex = /^[a-zA-Z]{1,5}$/;
  const numberRegex = /^[1-9]\d*$/;

  // 각 자동차 이름이 1자 이상 5자 이하의 글자인지 판별한다.
  const nameValidator = (names) => names.every(name => nameRegex.test(name))  

  // 사용자의 이동 횟수 입력을 자연수인지 판별한다.
  const numberValidator = (input) =>  numberRegex.test(+input)
  
  // 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
  const moveValidator = (value) => value >= Constants.FORWARD_LIMIT

  return Object.freeze({
    nameValidator,
    numberValidator,
    moveValidator
  })
}

export default validators()

