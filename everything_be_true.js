/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.
*/
function every(collection, pre) {
    // Create a counter to check how many are true.
    var counter = 0;
    // Check for each object
    for (var c in collection) {
        // If it is has property and value is truthy
        if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
            counter++;
        }
    }
    // Outside the loop, check to see if we got true for all of them and return true or false
    return counter == collection.length;
}

every([{
    "user": "Tinky-Winky",
    "sex": "male"
}, {
    "user": "Dipsy",
    "sex": "male"
}, {
    "user": "Laa-Laa",
    "sex": "female"
}, {
    "user": "Po",
    "sex": "female"
}], "sex");
