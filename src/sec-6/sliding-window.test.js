import {
  findLongestSubstring,
  maxSubarraySum,
  minSubArrayLen
} from "./sliding-window";

it.skip("finds longest substring with unique characters", () => {
  expect(findLongestSubstring("")).toBe(0);
  expect(findLongestSubstring("rithmschool")).toBe(7);
  expect(findLongestSubstring("thisisawesome")).toBe(6);
  expect(findLongestSubstring("thecatinthehat")).toBe(7);
  expect(findLongestSubstring("bbbbbb")).toBe(1);
  expect(findLongestSubstring("longestsubstring")).toBe(8);
  expect(findLongestSubstring("thisishowwedoit")).toBe(6);
});

it.skip("returns length of minimum subArray which sum is greater or equal to the interger passed", () => {
  expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2);
  expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toBe(2);
  expect(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toBe(1);
  expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toBe(3);
  expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toBe(5);
  expect(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)).toBe(2);
  expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toBe(0);
});

it.skip("finds maximum sum of sub array, whose length is given by 2nd parameter", () => {
  expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700);
  expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
  expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
  expect(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toBe(5);
  expect(maxSubarraySum([2, 3], 3)).toBe(null);
});
