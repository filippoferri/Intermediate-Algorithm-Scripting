/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Here are some helpful links:

String.charCodeAt()
String.fromCharCode()
*/
function fearNotLetter(str) {

    var newStr = [];
    for (var i=0;i<str.length;i++) {
        var letter = str.charCodeAt(i);
        newStr.push(letter);
    }

    // Find missing numbers
    var missing = [];
    for(var i = 1; i < newStr.length; i++)
    {
        if(newStr[i] - newStr[i-1] != 1)
        {
            var x = newStr[i] - newStr[i-1];
            var j = 1;
            while (j<x)
            {
                missing.push(newStr[i-1]+j);
                j++;
            }
        }
    }

    if (missing[0]) {
        newStr = String.fromCharCode(missing);
    } else {
        newStr = undefined;
    }

    alert(newStr);
}

fearNotLetter("bcd")
