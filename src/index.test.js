import { areThereDuplicates } from ".";

it.skip("tests areThereDuplicates", () => {
  expect(areThereDuplicates(1, 2)).toBe(false);
  expect(areThereDuplicates(1, 2, 2)).toBe(true);
  expect(areThereDuplicates("a", "b", "c", "a")).toBe(true);
});
