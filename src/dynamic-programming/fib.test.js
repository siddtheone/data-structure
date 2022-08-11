import { dynamicFib, fib } from "./fib";

test("fibonnaci series", () => {
  expect(fib(1)).toBe(1);
  expect(fib(2)).toBe(1);
  expect(fib(3)).toBe(2);
  expect(fib(4)).toBe(3);
  expect(fib(5)).toBe(5);
  // expect(fib(40)).toBe(55);

  expect(dynamicFib(100)).toBe(354224848179262000000);
  // expect(dynamicFib(1)).toBe(1);
  // expect(dynamicFib(2)).toBe(1);
  // expect(dynamicFib(3)).toBe(2);
  // expect(dynamicFib(4)).toBe(3);
  // expect(dynamicFib(5)).toBe(5);
  // expect(dynamicFib(10)).toBe(55);
  // expect(dynamicFib(20)).toBe(6765);
  // expect(dynamicFib(45)).toBe(1134903170);

  // expect(dynamicFib(50)).toBe(12586269025);
  // expect(dynamicFib(55)).toBe(139583862445);
  // expect(dynamicFib(70)).toBe(190392490709135);
});
