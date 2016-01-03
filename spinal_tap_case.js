/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Here are some helpful links:

RegExp
String.replace()
*/
function spinalCase(str) {

    // Find white space and underscores
    var regex = /\s+|_+/g;
    // Replace low-upper case to low-space-uppercase
    var newStr = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    // Replace space and _ with -
    newStr = newStr.replace(regex, '-').toLowerCase();

    alert(newStr);
}

spinalCase('The_Andy_Griffith_Show');
