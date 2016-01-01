/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

Here are some helpful links:

Array.splice()
String.replace()
Array.join()
*/
function myReplace(str, before, after) {

    // Define first characters
    var firstBefore = before.charAt(0);
    var firstAfter = after.charAt(0);

    // Check Uppercase
    function isUpperCase(val) {
        return val === val.toUpperCase();
    }

    // Replace first character
    var newFirst;
    if ( isUpperCase(firstBefore) ) {
        newFirst = firstAfter.toUpperCase();
    } else {
        newFirst = firstAfter.toLowerCase();
    }
    after = after.replace(firstAfter, newFirst);

    // Search and Replace
    var newstr = str.replace(before, after);

    alert(newstr);
}

myReplace("His name is Tom", "Tom", "john")
