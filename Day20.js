// Q-39
function isPrime(num) {
    if (num <= 1)
        return false; // Numbers less than or equal to 1 are not prime
    if (num === 2)
        return true; // 2 is the only even prime number
    // Check divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(11)); // Output: true
console.log(isPrime(4)); // Output: false
console.log(isPrime(17)); // Output: true
console.log(isPrime(1)); // Output: false
// Q-40
function reverseNumber(num) {
    const numStr = num.toString();
    const reverseStr = numStr.split('').reverse().join('');
    return parseInt(reverseStr);
}
console.log(reverseNumber(1234)); // Output: 4321
console.log(reverseNumber(100)); // Output: 1
export {};
