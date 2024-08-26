// Q-55
function isArmstrongNumber(num) {
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
export {};
