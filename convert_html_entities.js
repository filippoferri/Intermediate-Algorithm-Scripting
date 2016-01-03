/*
Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe), in a string to their corresponding HTML entities.

Here are some helpful links:

RegExp
HTML Entities
*/

function convert(str) {

    var splitStr = str.split("");
    var newChar = "";
    var newStr = [];

    for (var i = 0; i < splitStr.length; i++) {
        var val = splitStr[i];

        switch (val) {
        case "&":
            newChar = "&amp;";
            break;
        case "<":
            newChar = "&lt;";
            break;
        case ">":
            newChar = "&gt;";
            break;
        case "\"":
            newChar = "&bdquo;";
            break;
        case "'":
            newChar = "&#39;";
            break;
        default:
            newChar = val;
        }

        newStr.push(newChar);

    }

    var joinStr = newStr.join("");

    alert(joinStr);
}

convert("Dolce & Gabbana");
