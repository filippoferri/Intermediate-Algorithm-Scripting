/*
Compare two arrays and return a new array with any items only found in one of the original arrays.

Here are some helpful links:

Comparison Operators
Array.slice()
Array.filter()
Array.indexOf()
Array.concat()
*/
function diff(arr1, arr2) {
    // Concatenating two arrays
    var newArr = arr1.concat(arr2);

    // Filter isolated values
    function isolated(val) {
        if (arr1.indexOf(val) === -1 || arr2.indexOf(val) === -1) {
            return val;
        }
    }

    // Create new Array
    return newArr.filter(isolated);
}

diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
