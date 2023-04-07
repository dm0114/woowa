import carConstructor from "./Car.js";
import createRandomNumber from "../utils/RandomNumberGenerator.js";
import validators from '../utils/Validator.js';

import outputView from "../Views/OutputView.js";
import inputView from "../Views/InputView.js";
import constants from "../utils/Constants.js";

const controller = () => {

  const checkCarNames = (names) => {
    if (!validators.nameValidator(names)) {
      throw new Error(constants.ERROR.carNames);
    }
  }

  const checkTryCount = (tryCount) => {
    if (!validators.numberValidator(tryCount)) {
      throw new Error(constants.ERROR.tryCount);
    }
  }

  const handleCarNames = async () => {
    try {
      const names = await inputView.readCarNames();
      checkCarNames(names);  
      return names          
    } catch (error) {
      outputView.printError(error);
      return await handleCarNames();
    }
  }

  const handleTryCount = async () => {
    try {
      const tryCount = await inputView.readTryCount();
      checkTryCount(tryCount);
      return tryCount;
    } catch (error) {
      outputView.printError(error);
      return await handleTryCount();
    }    
  }

  // 초기 세팅
  const createCar = (name) => carConstructor(name, 0);
  const setCarList = (names) => names.map(name => createCar(name))
  const setGameList = (gameCount) => Array.from({length: gameCount}, (_, i) => i + 1)  

  // 자동차가 스스로 움직이는 것이 아니라, 컨트롤러에서 자동차를 움직이게 한다.
  const moveCar = (car) => carConstructor(car.getName(), car.getLocation() + 1);

  // 이동 여부 판단하여 이동된 차 또는 기존의 차 반환
  const tryMove = (car, value) => validators.moveValidator(value) ? moveCar(car) : car;

  // 1회 게임하여 차를 이동시키고 새로운 carList 반환
  const game = (cars) => {
    return cars.map((car) => {
      const value = createRandomNumber();
      return tryMove(car, value);
    });
  };

  // 우승자 리스트 반환
  const findWinners = (cars) => {
    const winningLocation = Math.max(...cars.map((car) => car.getLocation()));
    return cars
      .filter((car) => car.getLocation() === winningLocation)
      .map((car) => car.getName());
  };


  const playGames = async () => {   
    
    const carName = await handleCarNames()
    const count = await handleTryCount()
    const carList = setCarList(carName)
    const gameList = setGameList(count)

    outputView.printWinners(
      findWinners(        
        gameList.reduce((cars, set) => {
          outputView.printSetStatus(set)
          
          const newCarList = game(cars)
          outputView.printCarStatus(newCarList)
          return newCarList
        }, carList)
      )
    )
  }

  return Object.freeze({
    playGames,
  })
}


export default controller
