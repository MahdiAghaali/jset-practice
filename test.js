const stringLength = require('./tasks.js');
const reverseString = require('./reverseStr');
const capitalize = require('./capitlize');
const Calculator = require('./calculator.js');

describe ("lenght tests", () => {
  test('1', () => {
    const string = '1, 2';
    const len = stringLength(string);
    expect(len).toBe(4);
  });
  test('2', () => {
    const string = 'test';
    const len = stringLength(string);
    expect(len).toBe(4);
  });
  test('3', () => {
    const string = 'Hello world';
    const len = stringLength(string);
    expect(len).toBe('error');
  });
});

describe ("reverse tests", () => {
  test('1', () => {
    const string = '1, 2';
    const len = reverseString(string);
    expect(len).toBe('2 ,1');
  });
  test('2', () => {
    const string = 'test';
    const len = reverseString(string);
    expect(len).toBe('tset');
  });
  test('3', () => {
    const string = 'Hello';
    const len = reverseString(string);
    expect(len).toBe('olleH');
  });
});

describe("sum tests", () => {
  test("1", () => {
    const a = 1;
    const b = 1;
    const sum = Calculator.add(a, b);
    expect(sum).toEqual(2);
  });

  test("2", () => {
    const a = 10;
    const b = -10;
    const sum = Calculator.add(a, b);
    expect(sum).toEqual(0);
  });

  test("3", () => {
    const a = 1.5;
    const b = 1;
    const sum = Calculator.add(a, b);
    expect(sum).toBeCloseTo(2.5);
  });
});

describe("subtract tests", () => {
  test("1", () => {
    const a = 10;
    const b = 5;
    const sub = Calculator.subtract(a, b);
    expect(sub).toEqual(5);
  });

  test("2", () => {
    const a = 10;
    const b = 10;
    const sub = Calculator.subtract(a, b);
    expect(sub).toEqual(0);
  });

  test("3", () => {
    const a = 1;
    const b = 2;
    const sub = Calculator.subtract(a, b);
    expect(sub).toBeCloseTo(-1);
  });
});

describe("multiply tests", () => {
  test("1", () => {
    const a = 2;
    const b = 2;
    const mul = Calculator.multiply(a, b);
    expect(mul).toEqual(4);
  });

  test("2", () => {
    const a = 7;
    const b = 8;
    const mul = Calculator.multiply(a, b);
    expect(mul).toEqual(56);
  });

  test("3", () => {
    const a = 10;
    const b = 2.3;
    const mul = Calculator.multiply(a, b);
    expect(mul).toBeCloseTo(23);
  });
});

  describe("divide tests", () => {
    test("1", () => {
      const a = -8;
      const b = -2;
      const div = Calculator.divide(a, b);
      expect(div).toEqual(4);
    });
  
    test("2", () => {
      const a = 9;
      const b = 3;
      const div = Calculator.divide(a, b);
      expect(div).toEqual(3);
    });
  
    test("3", () => {
      const a = 10;
      const b = 5;
      const div = Calculator.divide(a, b);
      expect(div).toBeCloseTo(2);
    });
});

describe("capitalize tests", () => {
  test("1", () => {
    const string = 'mohi';
    const cap = capitalize(string);
    expect(cap).toEqual('Mohi');
  });
});