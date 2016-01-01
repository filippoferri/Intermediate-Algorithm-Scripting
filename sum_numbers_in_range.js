/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Here are some helpful links:

Math.max()
Math.min()
Array.reduce()
*/
function sumAll(arr) {

    // Sort Array - ascendent
    arr.sort(function(a, b){
        return a-b;
    });
    // Find lowest and largest
    var lowest  = Math.min.apply(null, arr);
    var largest = Math.max.apply(null, arr);
    // Push numbers in new array
    newArr = [];
    for (var i = lowest; i <= largest; i++) {
        newArr.push(i);
    }
    // Sum all numbers of the array
    var total = newArr.reduce(function (a, b) {
        return a + b;
    });

    return total;
}

sumAll([4, 1]);
