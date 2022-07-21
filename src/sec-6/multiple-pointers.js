export function isSubsequence(subStr, str) {
  let subIndex = 0;
  let strIndex = 0;

  while (strIndex < str.length && subIndex < subStr.length) {
    if (subStr[subIndex] === str[strIndex]) {
      subIndex++;
      strIndex++;
    } else {
      strIndex++;
    }
  }

  return subIndex === subStr.length;
}

export function averagePair(arr, average) {
  if (arr.length === 0) {
    return false;
  }

  let left = 0,
    right = arr.length - 1;

  while (left !== right) {
    const leftDiff = average - arr[left];
    const rightDiff = arr[right] - average;

    if (leftDiff > rightDiff) {
      left++;
    } else if (leftDiff < rightDiff) {
      right--;
    } else {
      return true;
    }
  }

  return false;
}
