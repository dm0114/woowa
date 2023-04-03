// 입출력을 받게 하는 모듈을 구현한다.
const readline = require("readline");

// 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
const splitNames = (input) => input.split(',')

// 각 자동차 이름이 1자 이상 5자 이하의 글자인지 판별한다.
const nameValidator = (names) => {
  const pattern = /^[a-zA-Z]{1,5}$/;
  return splitNames(names).every(name => pattern.test(name))
}

// 사용자의 이동 횟수 입력을 자연수인지 판별한다.
const numberValidator = (input) => {
  const pattern = /^[1-9]\d*$/
  return pattern.test(+input)
}

// 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
// 사용자가 잘못된 입력 값을 작성한 경우 에러 메시지를 보여주고, 다시 입력할 수 있게 한다.
const getInput = (validator, inputText ,errorMessage) => {;

  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.on('close', () => {
      // 입력이 끝난 후 실행할 코드
    })

    rl.question(inputText, (input) => {
      if (validator(input)) {
        rl.close();
        resolve(input);
      } else {
        console.log(errorMessage);
        rl.close();
        resolve(getInput(validator, inputText, errorMessage));
      }
    });
  });
}

module.exports = {
  nameValidator,
  numberValidator,
  getInput,
  splitNames
};




