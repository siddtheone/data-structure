export function merge(arr, group) {
  const res = [];
  let left = 0,
    right = 0;
  while (left < arr.length && right < group.length) {
    if (arr[left] < group[right]) {
      res.push(arr[left]);
      left++;
    } else {
      res.push(group[right]);
      right++;
    }
  }

  right < group.length
    ? res.push(...group.slice(right))
    : res.push(...arr.slice(left));
  return res;
}

export const mergeSort = (arr) =>
  arr.reduce((accumulator, ele) => merge(accumulator, [ele]), []);
