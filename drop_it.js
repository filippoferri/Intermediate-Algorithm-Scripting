/*
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

Return the rest of the array, otherwise return an empty array.

Here are some helpful links:

Arguments object
Array.shift()
Array.slice()
*/
function drop(arr, func) {
    var num = arr.length;
    for (var i = 0; i < num; i++) {
        if (func(arr[0])) {
            break;
        } else {
            arr.shift();
        }
    }

    alert(arr);
}

drop([1, 2, 3], function(n) {return n < 3; });
