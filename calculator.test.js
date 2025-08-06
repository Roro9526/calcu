import Calculator from "./calculator.js";

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("Addition", () => {
    const result = calculator.add(2, 3);
    expect(result).toBe(5);
  });

  test("Soustraction", () => {
    const result = calculator.subtract(5, 3);
    expect(result).toBe(2);
  });


  test("Mutiplication", () => {
    const result = calculator.multiply(4, 5);
    expect(result).toBe(20);
  });


  test("Division", () => {
    const result = calculator.divide(10, 2);
    expect(result).toBe(5);
  });

  test("Fraction", () => {
    const result = calculator.divide(7, 2);
    expect(result).toBe(3.5);
  });

  test("erreur division 0", () => {
    expect(() => calculator.divide(5, 0)).toThrow("pas de division par 0");
  });
});
