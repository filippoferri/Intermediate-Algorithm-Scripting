/*
Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

Here are some helpful links:

Remainder
*/
function sumFibs(num) {

    //Create Fobonacci sequence
    var arrFib = [1];
    for (var i = 1; i <= num;) {
        arrFib.push(i);
        i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
    }

    //
    var sum = arrFib.reduce(function (a, b) {
        if (b % 2 !== 0) return a + b;
        else return a;
    });

    alert(sum);
}

sumFibs(4);
