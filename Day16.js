// Q-31
// // Approach 1-
// function sumEvenNumbers(arr1: number[], arr2: number[], arr3: number[]): number[] {
//     // Helper function to sum even numbers in a given array
//     const sumEven = (arr: number[]): number => {
//         return arr.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
//     }
//     const sum1 = sumEven(arr1);
//     const sum2 = sumEven(arr2);
//     const sum3 = sumEven(arr3);
//     return [sum1, sum2, sum3]
// }
// console.log(sumEvenNumbers([1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12])); // Output: [6, 14, 22]
// console.log(sumEvenNumbers([2, 4, 6], [1, 3, 5], [10, 20, 30])); // Output: [12, 0, 60]
// console.log(sumEvenNumbers([11, 13, 15], [2,4], [8, 10, 12])); // Output: [0, 6, 30]
// Approach 2-
function sumEvenNumbers(arr1, arr2, arr3) {
    // Helper function.
    const sumEven = (arr) => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                sum += arr[i];
            }
        }
        return sum;
    };
    const sum1 = sumEven(arr1);
    const sum2 = sumEven(arr2);
    const sum3 = sumEven(arr3);
    return [sum1, sum2, sum3];
}
console.log(sumEvenNumbers([1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12])); // Output: [6, 14, 22]
console.log(sumEvenNumbers([2, 4, 6], [1, 3, 5], [10, 20, 30])); // Output: [12, 0, 60]
console.log(sumEvenNumbers([11, 13, 15], [2, 4], [8, 10, 12])); // Output: [0, 6, 30]
// Q-32
function concatenateFirstLetters(arr1, arr2, arr3) {
    // Helper function.
    function firstLetter(arr) {
        let concatenatedString = '';
        //     // For loop.
        //     for (let i = 0; i < arr.length; i++) {
        //         concatenatedString += arr[i][0];
        //     }
        //     return concatenatedString;
        // }
        // forEach loop.
        arr.forEach((word) => {
            concatenatedString += word[0];
        });
        return concatenatedString;
    }
    const firstArr = firstLetter(arr1);
    const secondArr = firstLetter(arr2);
    const thirdArr = firstLetter(arr3);
    return [firstArr, secondArr, thirdArr];
}
console.log(concatenateFirstLetters(["apple", "banana", "cherry"], ["dog", "elephant", "frog"], ["grape", "honeydew", "kiwi"]));
export {};
