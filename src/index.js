export function areThereDuplicates(...args) {
  return new Set(args).size !== args.length;
}

// function countUniqueValues(arr) {
//   if (arr.length === 0) return 0;

//   let i = 0;

//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }

//   return i + 1;
// }

// const inputs = [
//   [1, 1, 1, 1, 1, 2],
//   [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13],
//   [],
//   [-2, -1, -1, 0, 1]
// ];

// for (const i of inputs) {
//   console.log(i, countUniqueValues(i));
// }

// anagram
// function validAnagram(str1, str2) {
//   if(str1.length !== str2.length) {
//     return false;
//   }

//   const obj1 = {};
//   const obj2 = {};

//   for(let i = 0; i < str1.length; i++) {
//     const char1 = str1[i];
//     const char2 = str2[i];

//     obj1[char1] = (obj1[char1] || 0) + 1;
//     obj2[char2] = (obj2[char2] || 0) + 1;
//   }

//   for(const key of Object.keys(obj1)) {
//     if(!(key in obj2) || obj1[key] !== obj2[key]) {
//       return false
//     }
//   }

//   return true;
// }

// const inputs = [
//   ['', ''],
//   ['aaz', 'zza'],
//   ['anagram', 'nagaram'],
//   ['rat', 'car'],
//   ['awesome', 'awesom'],
//   ['qwerty', 'qeywrt'],
//   ['texttwisttime', 'timetwisttext']
// ];

// for(const [str1, str2] of inputs) {
//   console.log(str1, str2, validAnagram(str1, str2));
// }
