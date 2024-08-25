// Q-51
function reverseNumber(n) {
    let numStr = n.toString().split('').reverse().join('');
    return parseInt(numStr);
}
console.log(reverseNumber(1234));
console.log(reverseNumber(567));
// Q-52
function averageOfNumberString(str) {
    let numbers = [];
    for (let i = 0; i <= str.length; i++) {
        if (typeof i === "number") {
            numbers.push(i);
        }
        else if (typeof i === "string") {
            return NaN;
        }
    }
    let total = numbers.reduce((total, current) => total + current, 0);
    return total / numbers.length;
}
console.log(averageOfNumberString('The numbers are 12, 15, and 20.'));
console.log(averageOfNumberString('No numbers here!'));
export {};
