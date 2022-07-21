export const getDigit = (number, place) =>
  Math.floor(Math.abs(number) / Math.pow(10, place)) % 10;

export const digitCount = (num) =>
  num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

export const mostDigits = (arr) =>
  arr.reduce(
    (acc, ele) => Math.max(acc, digitCount(ele)),
    digitCount(arr[0] || 0)
  );

export const radixSort = (arr) => {
  const loopCount = mostDigits(arr);

  for (let i = 0; i < loopCount; i++) {
    const bucket = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      bucket[getDigit(arr[j], i)].push(arr[j]);
    }
    arr = [].concat(...bucket);
  }
  return arr;
};
