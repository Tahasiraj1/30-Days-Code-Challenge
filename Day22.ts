// Q-43

function countDigits(number: number): number {
    let numStr = number.toString();

    let digitCount = numStr.length;

    return digitCount;
}

console.log(countDigits(12345));   // Output: 5
console.log(countDigits(987));     // Output: 3
console.log(countDigits(0));       // Output: 1
console.log(countDigits(1000000)); // Output: 7


// Q-44

function calculatePower(b: number, e: number): number {
    if (e === 0) return 1;

    let result = 1;

    for (let i = 0; i < e; i++) {
        result *= b;
    }

    return result;
}

console.log(calculatePower(2, 3));
console.log(calculatePower(5, 0));

