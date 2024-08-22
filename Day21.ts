// Q-41

function sumOfDigits(num: number): number {
    const numStr = num.toString();
    const Digits = numStr.split('').map(char => parseInt(char))

    const sum = Digits.reduce((total, digit) => total + digit, 0);

    return sum;
}

console.log(sumOfDigits(123));  // Output: 6.
console.log(sumOfDigits(4567)); // Output: 22.

// Q-42

function countConsonants(str: string): number {
    const vowels = 'aeiouAEIOU';

    let consonants = 0;

    for (const char of str) {
        if (/[a-zA-Z]/.test(char) && !vowels.includes(char)) {
            consonants++;
        }
    }

    return consonants;
}

console.log(countConsonants('hello'));      // Output: 3
console.log(countConsonants('TypeScript')); // Output: 8
console.log(countConsonants('AEIOUaeiou')); // Output: 0
console.log(countConsonants('123'));        // Output: 0
