import { averagePair, isSubsequence } from "./multiple-pointers";

it.skip("checks if array has an pair for the average", () => {
  expect(averagePair([1, 2, 3], 2.5)).toBe(true);
  expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
  expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
  expect(averagePair([], 4)).toBe(false);
});

it.skip("check if characters in first string form a subsequence of characters in second string", () => {
  expect(isSubsequence("hello", "hello world")).toBe(true);
  expect(isSubsequence("sing", "string")).toBe(true);
  expect(isSubsequence("abc", "abracadabra")).toBe(true);
  expect(isSubsequence("abc", "acb")).toBe(false);
});
