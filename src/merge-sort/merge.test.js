import { merge, mergeSort } from "./merge";

test.skip("merge", () => {
  expect(merge([1, 3, 5], [2, 4])).toEqual([1, 2, 3, 4, 5]);
  expect(merge([2, 2, 2], [2, 4])).toEqual([2, 2, 2, 2, 4]);
});

test.skip("merge sort", () =>
  expect(mergeSort([7, 6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6, 7]));
