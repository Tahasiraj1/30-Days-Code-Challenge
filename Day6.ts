// Q-11
//CALCULATOR IN FUNCTIONAL PROGRAMMING

import chalk from "chalk";

function Calculator1(num1: number, num2: number, operator: string) {
    
    function add(a: number, b: number) {
        return a + b;
    }

    function subtract(a: number, b: number) {
        return a - b;
    }

    function multiply(a: number, b: number) {
        return a * b;
    }

    function divide(a: number, b: number) {
        return a / b;
    }

    if (operator === '+') {
        return add(num1, num2);

    } else if (operator === '-') {
        return subtract(num1, num2);

    } else if (operator === '*') {
        return multiply(num1, num2)

    } else if (operator === '/') {

        if ( num1 !== 0 && num2 !== 0) {
            return divide(num1, num2);

        } else {
            return chalk.redBright("Division with zero return infinity!");
        }
    }
}

console.log(Calculator1(4, 3, "+"));
console.log(Calculator1(4, 3, "-"));
console.log(Calculator1(4, 3, "*"));
console.log(Calculator1(9, 3, "/"));
console.log(Calculator1(2, 0, "/"));


//CALCULATOR IN OBJECT ORIENTED PROGRAMMING

interface CalculatorType {
    num1: number;
    num2: number;
}

class calculator implements CalculatorType {
    num1 = 0;
    num2 = 0;

    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }

    add() {
        return this.num1 + this.num2;
    }

    subtract() {
        return this.num1 - this.num2;
    }

    multiply() {
        return this.num1 * this.num2;
    }

    divide() {
        return this.num1 / this.num2;
    }
}

let myCalculator = new calculator(2, 2);
console.log(myCalculator.add());
console.log(myCalculator.subtract());
console.log(myCalculator.multiply());
console.log(myCalculator.divide());

// Q-12

function multipleArrays(mixArray: any[]): {
    numberArray: number[],
    stringArray: string[],
    booleanArray: boolean[]
} {
    let numberArray: number[] = [];
    let stringArray: string[] = [];
    let booleanArray: boolean[] = [];

    for (let i = 0; i < mixArray.length; i++) {
        if (typeof mixArray[i] === 'number') {
            numberArray.push(mixArray[i]);

        } else if (typeof mixArray[i] === 'string') {
            stringArray.push(mixArray[i]);

        } else if (typeof mixArray[i] === 'boolean') {
            booleanArray.push(mixArray[i]);

        }
    }

    return {numberArray, stringArray, booleanArray}
}

console.log(multipleArrays([1, 'Taha', true, 'Noor', 'Kanwal', false, 3]));
