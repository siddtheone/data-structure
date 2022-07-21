export function findLongestSubstring(str) {
  let left = 0,
    right = 0,
    tempStr = "",
    longest = tempStr.length;
  while (left < str.length) {
    console.log(tempStr);
    if (tempStr.indexOf(str[right]) !== -1 && right < str.length) {
      tempStr += str[right];
      right++;
    } else if (tempStr.indexOf(str[right]) > -1) {
      left++;
      longest = Math.max(longest, tempStr.length);
      tempStr = "";
    } else {
      break;
    }
  }
  return longest;
}

export function minSubArrayLen(arr, sum) {}

export function maxSubarraySum(arr, count) {
  if (arr.length < count) return null;
  let maxSum = -Infinity;
  let sum = 0;
  for (let i = 0; i < count; i++) {
    sum += arr[i];
  }
  if (maxSum < sum) {
    maxSum = sum;
  }
  for (let i = 1; i <= arr.length - count; i++) {
    sum = sum - arr[i - 1] + arr[i + count - 1];
    if (maxSum < sum) {
      maxSum = sum;
    }
  }

  return maxSum;
}
