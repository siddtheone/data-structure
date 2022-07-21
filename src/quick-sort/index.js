export function pivot(arr, start = 0, end = arr.length - 1) {
  let pivotIndex = start;
  let pivot = arr[start];
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      pivotIndex++;
      const temp = arr[pivotIndex];
      arr[pivotIndex] = arr[i];
      arr[i] = temp;
    }
  }
  const temp = arr[start];
  arr[start] = arr[pivotIndex];
  arr[pivotIndex] = temp;
  return pivotIndex;
}

// export function quickSort(arr, start = 0, end = arr.length - 1) {
//   const pIndex = pivot(arr, start, end);
//   const left = arr.slice(start, pIndex);
//   const right = arr.slice(pIndex + 1);

//   if (left.length > 1) {
//     quickSort(arr, 0, pIndex - 1);
//   }
//   if (right.length > 1) {
//     quickSort(arr, pIndex + 1);
//   }

//   return arr;
// }

// export function quickSort(arr) {
//   let left, right;

//   function helper() {
//     const pIndex = pivot(arr);
//     left = arr.slice(0, pIndex);
//     right = arr.slice(pIndex + 1);

//     if (left.length > 1) {
//       pivot(arr, 0, pIndex - 1);
//     }
//     if (right.length > 1) {
//       pivot(arr, pIndex + 1);
//     }
//   }

//   while (left.length !== 0 && right.length !== 0) {
//     helper();
//   }

//   return arr;
// }

export function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pIndex = pivot(arr, start, end);
    quickSort(arr, start, pIndex - 1);
    quickSort(arr, pIndex + 1, end);
  }

  return arr;
}
