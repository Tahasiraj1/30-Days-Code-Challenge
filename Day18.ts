// Q-35

function oddSumMultiplicationTable(numbers: number[]): number [] {
    let oddSum = 0;

    for (const num of numbers) {
        if (num % 2 !== 0) {
            oddSum += num;
        }
    }

    const multiplicationTable = [];

    for (let i = 1; i <= 10; i++) {
        multiplicationTable.push(oddSum * i);
    }

    return multiplicationTable
}

console.log(oddSumMultiplicationTable([2, 3, 5, 8, 11]));
// Output: [19, 38, 57, 76, 95, 114, 133, 152, 171, 190]

// Q-36

function filterAndSquareEven(numbers: number[]): number[] {
    const evenNumbers = [];

    for (const num of numbers) {
        if (num % 2 === 0) {
            evenNumbers.push(Math.pow(num,2));
        }
    }

    return evenNumbers;
}

console.log(filterAndSquareEven([1, 2, 3, 4, 5, 6])); // Output: [4, 16, 36]
