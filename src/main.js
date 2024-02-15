'use strict';

function countFactorial(number) {
    if (number < 0) {
        return 'Can\'t calculate factorial for negative number! Please, enter a positive value.';
    }
    else if (number !== 1) {
        return number * countFactorial(number - 1);
    }
    else {
        return number;
    }
}

console.log(countFactorial(-2));
console.log(countFactorial(0)); // Не можу зрозуміти, чому ми отримуємо NaN в цьому випадку.
console.log(countFactorial(4));
