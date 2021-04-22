
/*

Given an integer array and an integer K, find the number of sub arrays in which all elements are less than K.

Follow up -
Given an integer array and an integer K, find the number of non overlapping unordered pairs of sub arrays in which all elements are less than K.

*/

var k = 6;
var arr = [2, 3, 30, 45, 6, 7, 8, 3, 25, 5];

let results = [];
let currentSubArray = [];
let isReset = false;
for (let index = 0; index < arr.length; ++index) {
   if (arr[index] < k) {
      currentSubArray.push(arr[index]);
      if (index === arr.length - 1) {
        isReset = true;
      }
   } else if (currentSubArray.length) {
     isReset = true;
   }

  if (isReset) {
    results.push(currentSubArray);
    currentSubArray = [];
    isReset = false;
  }
}

let usedKeys = [];
var dedupedSet = results.reduce((acc, r) => {
  const elementKey = JSON.stringify(r);
  if (!usedKeys.includes(elementKey)) {
     usedKeys.push(elementKey);
     acc.push(r);
  }
  return acc;
}, []);

console.log(results);
console.log(dedupedSet);