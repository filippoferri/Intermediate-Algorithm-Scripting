/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

Here are some helpful links:

Smallest Common Multiple
*/

function gcd(a, b) {
  return b ? gcd(b, a % b) : Math.abs(a);
}

function scm(a, b) {
  return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
  arr = arr.sort();
  result = 1;
  for (var i = arr[0]; i <= arr[1]; i++) {
    result = scm(result, scm(result, i));
  }
  return result;
}

smallestCommons([1, 5]);
