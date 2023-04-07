const { nameValidator, numberValidator } = require('../src/utils/Validator');


// Validator Spec
describe('Validator', () => {  

  // 각 자동차 이름이 1자 이상 5자 이하의 글자인지 판별한다.
  describe('nameValidator', () => {
    it('returns true for valid input', () => {
      expect(nameValidator('abc,def,ghi')).toBe(true);
    });
  
    it('returns false for input with too long names', () => {
      expect(nameValidator('abcdef,ghijk,lmn')).toBe(false);
    });

    it('returns false for input with too short names', () => {
      expect(nameValidator(',ghijk,lmn')).toBe(false);
    });
  
    it('returns false for input with non-alphabetic characters', () => {
      expect(nameValidator('abc,123,def')).toBe(false);
    });
  });

  // 사용자의 이동 횟수 입력을 자연수인지 판별한다.
  describe('numberValidator', () => {
    it('returns true if the input is a positive integer', () => {
      const input = '123';
      expect(numberValidator(input)).toEqual(true);
    });
  
    it('returns false if the input is not a positive integer', () => {
      const input = '123.45';
      expect(numberValidator(input)).toEqual(false);
    });
  
    it('returns false if the input is zero', () => {
      const input = '0';
      expect(numberValidator(input)).toEqual(false);
    });

    it('returns false if the input is text', () => {
      const input = 'f';
      expect(numberValidator(input)).toEqual(false);
    });
  });
})

