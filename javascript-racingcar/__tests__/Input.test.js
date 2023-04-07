const { getInput } = require('../src/io');

describe('getInput', () => {
  it('returns the input if the validator function returns true', async () => {
    const mockQuestion = jest.fn(); // rl.question()을 모의(mock)하는 함수
    mockQuestion.mockImplementationOnce((inputText, callback) => {
      callback('valid_input'); // 입력값을 자동화
    });

    const result = await getInput(() => true, 'Input text', 'Error message', mockQuestion);
    expect(result).toEqual('valid_input');
    expect(mockQuestion).toHaveBeenCalled();
  }, 3000);
});