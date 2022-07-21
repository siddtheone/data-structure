import { digitCount, getDigit, mostDigits, radixSort } from ".";

test.skip("get digit", () => {
  expect(getDigit(12345, 0)).toBe(5);
  expect(getDigit(12345, 1)).toBe(4);
  expect(getDigit(12345, 2)).toBe(3);
  expect(getDigit(12345, 3)).toBe(2);
  expect(getDigit(12345, 4)).toBe(1);
});

test.skip("digit count", () => {
  expect(digitCount(12345)).toBe(5);
  expect(digitCount(1234)).toBe(4);
  expect(digitCount(123)).toBe(3);
  expect(digitCount(12)).toBe(2);
});

test.skip("most digit", () => {
  expect(mostDigits([1234, 56, 7])).toBe(4);
  expect(mostDigits([1, 1, 11111, 1])).toBe(5);
  expect(mostDigits([12, 34, 56, 78])).toBe(2);
});

test.skip("Radix sort", () => {
  // expect(radixSort([100, 10, 1000])).toEqual([10, 100, 1000]);
  expect(radixSort([987654321, 499, 1, 1000])).toEqual([
    1,
    499,
    1000,
    987654321
  ]);
});
