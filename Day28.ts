// Q-55

function isArmstrongNumber(num: number): boolean {
    const numOfDigits = Math.floor(Math.log10(num)) + 1;
    let sum = 0;
    let temp = num;

    while (temp > 0) {
        const digit = temp % 10;
        sum += Math.pow(digit, numOfDigits);
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

console.log(isArmstrongNumber(153)); // Output: true

// Q-56

// Function to calculate GCD using the Euclidean algorithm
function gcd(a: number, b: number): number {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Function to calculate LCM using GCD
function lcm(a: number, b: number): number {
    return Math.abs(a * b) / gcd(a, b);
}

// Example Usage:
const num1 = 12;
const num2 = 18;
console.log(`LCM of ${num1} and ${num2} is:`, lcm(num1, num2));
// Output: LCM of 12 and 18 is: 36

