/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Here are some helpful links:

Array.push()
String.split()
*/
function pair(str) {

    var dnaStrand = [];
    var newStr = str.split("");

    for (var i = 0; i < newStr.length; i++) {
        var val = newStr[i];
        var pair = "";

        switch (val) {
        case "A":
            pair = "T";
            break;
        case "T":
            pair = "A";
            break;
        case "C":
            pair = "G";
            break;
        case "G":
            pair = "C";
        }

        var currentPair = [val, pair];
        dnaStrand.push(currentPair);
    }

    alert(dnaStrand);
}

pair("GCG");
