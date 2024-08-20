// Q-33
function productOfOdds(numbers) {
    let product = 1;
    let isOdd = false;
    for (const num of numbers) {
        if (num % 2 !== 0) {
            product *= num;
            isOdd = true;
        }
    }
    return isOdd ? product : 1;
}
console.log(productOfOdds([2, 3, 5, 6])); // Output: 15
console.log(productOfOdds([2, 4, 6, 8])); // Output: 1
// Q-34
function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
console.log(findLongestWord("I love coding in TypeScript")); // Output: "TypeScript"
console.log(findLongestWord("I am learning to code.")); // Output: "learning"
export {};
