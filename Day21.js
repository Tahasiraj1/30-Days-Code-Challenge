// Q-41
function sumOfDigits(num) {
    const numStr = num.toString();
    const Digits = numStr.split('').map(char => parseInt(char));
    const sum = Digits.reduce((total, digit) => total + digit, 0);
    return sum;
}
console.log(sumOfDigits(123)); // Output: 6.
console.log(sumOfDigits(4567)); // Output: 22.
// Q-42
// ### Question 2: Count Consonants in a String
// *Problem:*  
// Write a function countConsonants that takes a string as input and returns the number of consonants in the string. Consonants are all alphabetical characters except a, e, i, o, u (both lowercase and uppercase).
// *Example:*  
// typescript
// countConsonants("hello"); // Output: 3
// countConsonants("TypeScript"); // Output: 7
// *Hint:*  
// Loop through the string and check each character to see if it is a consonant by excluding vowels.
function countConsonants(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let consonant = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (/[a-zA-Z]/.test(char) && !vowels.includes(char)) {
            consonant++;
        }
    }
    return consonant;
}
console.log(countConsonants('hello')); // Output: 3
console.log(countConsonants('TypeScript')); // Output: 8
console.log(countConsonants('AEIOUaeiou')); // Output: 0
console.log(countConsonants('123')); // Output: 0
export {};
