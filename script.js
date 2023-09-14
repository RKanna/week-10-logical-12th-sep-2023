//1..Write a function that determines whether a given string is a valid JSON or not.
function checkJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (error) {
    return false;
  }
}
console.log(checkJSON('{"name": "John", "age": 30}'));
console.log(checkJSON('{"name": "John", "age": 30,}'));
console.log(checkJSON('{"name": "John", "age": "30"}'));
console.log(checkJSON('{"name": "John", "age": 30, "city": "New York"}'));

//2.Write a function that finds the longest increasing subarray within an array of numbers.

function longestIncreasingSubarray(arr) {
  return arr.reduce(
    (acc, cur, index) => {
      index === 0 || cur > arr[index - 1]
        ? (acc.currentSubarray.push(cur),
          acc.currentSubarray.length > acc.maxSubarray.length &&
            (acc.maxSubarray = [...acc.currentSubarray]))
        : (acc.currentSubarray = [cur]);
      return acc;
    },
    { maxSubarray: [], currentSubarray: [] }
  ).maxSubarray;
}
console.log(longestIncreasingSubarray([1, 2, 3, 1, 2, 3, 4, 5]));
console.log(longestIncreasingSubarray([5, 4, 3, 2, 1]));
console.log(longestIncreasingSubarray([1, 2, 3, 4, 3, 2, 1]));

//3.Implement a function that performs a deep comparison between two objects to check if they are equal.

function deepEqual(obj1, obj2) {
  return typeof obj1 !== typeof obj2
    ? false
    : typeof obj1 !== "object" || obj1 === null
    ? obj1 === obj2
    : Object.keys(obj1).length === Object.keys(obj2).length &&
      Object.keys(obj1).every((key) => deepEqual(obj1[key], obj2[key]));
}
const objA = { a: 1, b: { c: 2 } };
const objB = { a: 1, b: { c: 2 } };
const objC = { a: 1, b: { c: 3 } };

console.log(deepEqual(objA, objB));
console.log(deepEqual(objA, objC));

//4.Implement a function to calculate the factorial of a given non-negative integer using recursion.

