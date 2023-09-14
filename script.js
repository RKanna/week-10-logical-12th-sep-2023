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
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(0));
console.log(factorial(5));
console.log(factorial(10));

//5.Write a function that finds all pairs of elements in an array that add up to a specific target sum.
function findPairsWithSum(arr, targetSum) {
  const pairs = [];
  const seen = new Set();

  for (const num of arr) {
    const complement = targetSum - num;
    if (
      seen.has(complement) ||
      (complement === num && arr.indexOf(num) !== arr.lastIndexOf(num))
    ) {
      pairs.push([num, complement]);
    }
    seen.add(num);
  }

  return pairs;
}
console.log(findPairsWithSum([1, 2, 3, 4, 5], 7));
console.log(findPairsWithSum([1, 2, 3, 4, 5], 10));
console.log(findPairsWithSum([3, 4, 2, 1, 5], 8));

//6.Create a function that finds the largest common prefix among an array of strings.
function longestCommonPrefix(strings) {
  if (strings.length === 0) {
    return "";
  }

  return strings.reduce((prefix, currentString) => {
    let i = 0;
    while (
      i < prefix.length &&
      i < currentString.length &&
      prefix[i] === currentString[i]
    ) {
      i++;
    }
    return prefix.slice(0, i);
  }, strings[0]);
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "car", "race"]));
console.log(longestCommonPrefix(["apple", "app", "apricot"]));

//7.Create a function to find the nth prime number.
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}
function nthPrime(n) {
  if (n === 1) return 2;
  let count = 1;
  let candidate = 1;
  while (count < n) {
    candidate += 2;
    if (isPrime(candidate)) {
      count++;
    }
  }
  return candidate;
}
console.log(nthPrime(1));
console.log(nthPrime(5));
console.log(nthPrime(10));

//8.Implement a function that sorts an array of objects by a specific property in ascending order.
