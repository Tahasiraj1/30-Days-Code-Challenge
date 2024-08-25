// Q-53
function countDivisors(num) {
    let divisorCount = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisorCount++;
        }
    }
    return divisorCount;
}
console.log(countDivisors(12)); // Output: 6 (1, 2, 3, 4, 6, 12)
console.log(countDivisors(7)); // Output: 2 (1, 7)
// Q-54
function isPerfectSquare(num) {
    // Calculate the square root of the number
    let sqrt = Math.sqrt(num);
    // If sqrt equals to Math.floor(sqrt), return true.
    return sqrt === Math.floor(sqrt);
}
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(20));
export {};
