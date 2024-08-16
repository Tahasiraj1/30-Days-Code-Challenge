// Q-25

function countVowels(str: string): number {
    let count: number = 0;
    let vowels: string = `aeiousAEIOU`

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count ++;
        }
    }
    return count;
}

console.log(countVowels("hello world")); // Output: 3
console.log(countVowels("TypeScript"));  // Output: 2
console.log(countVowels("Taha"));        // Output: 2

// Q-26

function findMissingNumber(arr: number[]): number {
    const n: number = arr.length + 1;
    const expectedSum: number = (n * (n + 1)) / 2;
    const actualSum: number = arr.reduce((acc, num) => acc + num, 0);

    return expectedSum - actualSum;
}

// Test cases
console.log(findMissingNumber([1, 2, 4, 5]));          // Output: 3
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5])); // Output: 6
console.log(findMissingNumber([2, 3, 1, 5]));          // Output: 4















