// Q-49
function sumOfOddEven(numbers) {
    let evenNum = 0;
    let oddNum = 0;
    const digits = numbers.toString();
    for (const digit of digits) {
        const num = parseInt(digit);
        if (num % 2 === 0) {
            evenNum += num;
        }
        else {
            oddNum += num;
        }
    }
    let diff = Math.abs(evenNum - oddNum);
    return diff;
}
console.log(sumOfOddEven(1234));
// Q-50
function smallestDivisor(num) {
    let divisor = 0;
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            divisor = i;
            break;
        }
    }
    return divisor;
}
console.log(smallestDivisor(15));
console.log(smallestDivisor(11));
export {};
