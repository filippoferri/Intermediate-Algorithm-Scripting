/*
Flatten a nested array. You must account for varying levels of nesting.

Here are some helpful links:

Array.isArray()
*/
function steamroller(arr) {

    var flatten = [].concat.apply([], arr);

    alert(flatten);
}

steamroller([1, [2], [3, [[4]]]]);
