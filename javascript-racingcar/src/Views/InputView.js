import Console from '../utils/Console.js';
import Constants from '../utils/constants.js';

const InputView = Object.freeze({
  async readCarNames() {
    const input = await Console.read(Constants.EXPLAIN.nameExplain);
    return input.split(',');
  },

  async readTryCount() {
    const input = await Console.read(Constants.EXPLAIN.numberExplain);
    return +input;
  },
});

export default InputView;