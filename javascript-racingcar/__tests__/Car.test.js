const { createCars } = require('../src/Car/Car');

describe('createCars', () => {
  it('creates cars with given names', () => {
    const carNames = ['Tesla', 'BMW', 'Toyota'];
    const cars = createCars(carNames);

    expect(cars.length).toEqual(carNames.length);
    expect(cars[0].getName()).toEqual(carNames[0]);
    expect(cars[1].getName()).toEqual(carNames[1]);
    expect(cars[2].getName()).toEqual(carNames[2]);
  });

  it('creates cars with initial location of 0', () => {
    const carNames = ['Tesla', 'BMW', 'Toyota'];
    const cars = createCars(carNames);

    expect(cars[0].getLocation()).toEqual(0);
    expect(cars[1].getLocation()).toEqual(0);
    expect(cars[2].getLocation()).toEqual(0);
  });
});

describe('Car', () => {
  describe('move', () => {
    it('increases the location of the car by 1', () => {
      const carNames = ['Tesla', 'BMW', 'Toyota'];
      const cars = createCars(carNames);  
      
      cars[0] = cars[0].move();
      expect(cars[0].getLocation()).toEqual(1);
    });
  });
});


// 자동차 객체를 생성할 때 이름을 빈 문자열 또는 숫자로 설정하면 예외가 발생하는지 확인합니다.
// 자동차 객체 생성 후 getName 메소드를 호출하면 정상적으로 자동차 이름을 반환하는지 확인합니다.
// 자동차 객체 생성 후 getLocation 메소드를 호출하면 0을 반환하는지 확인합니다.
// 자동차 객체 생성 후 move 메소드를 호출하면 getLocation 메소드에서 1을 반환하는지 확인합니다.
// 자동차 객체를 생성하고 setName 메소드를 호출하여 이름을 변경한 후 getName 메소드를 호출하면 변경된 이름이 반환되는지 확인합니다.
// printCarLocations 함수를 호출하여 자동차들의 초기 위치를 출력한 후, move 메소드를 호출하여 자동차를 이동시킨 후, printCarLocations 함수를 다시 호출하여 자동차들의 이동한 위치를 출력한 결과가 예상한 대로 출력되는지 확인합니다.