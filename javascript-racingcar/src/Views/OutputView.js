import Console from '../utils/Console.js';
import constants from '../utils/constants.js';


const OutputView = Object.freeze({
  printEmptyLine: () => { Console.print(constants.EMPTY_LINE) },

  printSetStatus: (set) => { 
    Console.print(constants.EMPTY_LINE);
    Console.print(`${constants.SET} ${set}`)
  },

  printResult: () => {
    Console.print(constants.EMPTY_LINE);
    Console.print(constants.RESULT_TITLE);
  },

  printWinners: (winners) => { Console.print(`${winners.join(', ')} ${constants.IS_WINNERS}`) },

  printError: (error) => { Console.print(error.message) },

  printCarStatus: (cars) => { cars.forEach(car => console.log(`${car.getName()}: ${car.getLocation()}`)) }
});

export default OutputView