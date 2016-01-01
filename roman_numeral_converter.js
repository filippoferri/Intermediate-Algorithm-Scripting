/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Here are some helpful links:

Roman Numerals
Array.splice()
Array.indexOf()
Array.join()
*/
function convert(num) {

    // Create arrays with default conversion with matching indices.
    var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    var romanized = '';

    // Loop through the indices of the decimalValue array.
    for (var i = 0; i < decimalValue.length; i++) {
        // Continue to loop while the value at the current index will fit into numCopy
        while (decimalValue[i] <= num) {
            // Add the Roman numeral & decrease numCopy by the decimal equivalent.
            romanized += romanNumeral[i];
            num -= decimalValue[i];
        }
    }

    alert(romanized);
    //return num;
}

convert(36);
