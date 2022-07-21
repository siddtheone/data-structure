import { pivot, quickSort } from ".";

test.skip("pivot", () => {
  const arr1 = [5, 2, 1, 8, 4, 7, 6, 3];
  expect(pivot(arr1)).toBe(4);
  expect(pivot([33, 22, 11])).toBe(2);
  expect(pivot([4, 6, 2, 9, 10, 1, 3, 99, 98, 24, 0])).toBe(4);
});

test.skip("quick sort", () => {
  const res = quickSort([3, 2, 1, 10, 9, 7, 8, 6, 4, 5]);
  expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
