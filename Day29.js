// Q-57
function productOfNonZeroDigits(num) {
    let product = 1;
    let hasNonZeroDigit = false;
    while (num > 0) {
        const digit = num % 10;
        if (digit !== 0) {
            product *= digit;
            hasNonZeroDigit = true;
        }
        num = Math.floor(num / 10);
    }
    return hasNonZeroDigit ? product : 0;
}
console.log(productOfNonZeroDigits(4056)); // Output: 120
console.log(productOfNonZeroDigits(1002)); // Output: 2
console.log(productOfNonZeroDigits(0)); // Output: 0
// Q-58
function difference(numbers) {
    let numStr = numbers.toString();
    let largestNumber = Number(numStr[0]);
    let smallestNumber = Number(numStr[0]);
    for (const char of numStr) {
        const digit = parseInt(char);
        if (digit > largestNumber) {
            largestNumber = digit;
        }
        if (digit < smallestNumber) {
            smallestNumber = digit;
        }
    }
    return largestNumber - smallestNumber;
}
console.log(difference(7593)); // Output: 6
export {};
