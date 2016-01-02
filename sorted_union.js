/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

Here are some helpful links:

Arguments object
Array.reduce()
*/
function unite() {

    // concatenate arguments
    var concatArr = [];
    var i = 0;
    while (arguments[i]) {
        concatArr = concatArr.concat(arguments[i]);
        i++;
    }

    // Filter Array
    var uniqueArray = concatArr.filter(function (item, pos) {
        return concatArr.indexOf(item) == pos;
    });

    alert(uniqueArray);
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
