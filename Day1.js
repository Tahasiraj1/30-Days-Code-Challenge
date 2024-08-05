// Q-1
function sumArray(...numbers) {
    let sum = numbers.reduce((current, total) => current + total, 0);
    return sum;
}
console.log(sumArray(1, 2, 3, 4, 5));
// Q-2
function reverseString(input) {
    return input.split('').reverse().join('');
}
console.log(reverseString('Hello, World!'));
export {};
