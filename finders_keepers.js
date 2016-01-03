/*
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

Here are some helpful links:

Array.filter()
*/
function find(arr, func) {
    var num;
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            num = arr[i];
        }
    }

    alert(num);
}

find([1, 2, 3, 4], function (num) {
    return num % 2 === 0;
});
