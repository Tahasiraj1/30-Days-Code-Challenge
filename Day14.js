// Q-27
// Approach 1.
// function findMax(arr1: number[], arr2: number[]): number {
//     // Check if arrays are non-empty
//     if (arr1.length === 0 || arr2.length === 0) {
//         throw new Error("Both arrays must be non-empty.");
//     }
//     // Find the maximum value in the first array
//     const max1: number = Math.max(...arr1);
//     // Find the maximum value in the second array
//     const max2: number = Math.max(...arr2);
//     // Return the sum of the two maximum values
//     return max1 + max2;
// }
// // Test cases
// console.log(findMax([3, 5, 7, 2, 8], [10, 20, 30, 5])); // Output: 38
// console.log(findMax([1, 2, 3], [4, 5, 6])); // Output: 9
// Approach 2. Incorrect
// function findMax(arr1: number[], arr2: number[]): number {
//     let max = [0];
//     for (let i = 1; i < arr1.length; i++){
//         if (arr1[i] > max[i]) {
//             max.push(arr1[i]);
//         }
//     }
//     for (let j = 0; j < arr2.length; j++) {
//         if (arr2[j] > max[j]) {
//             max.push(arr2[j]);
//         }
//     }
//     let total: number = max.reduce((acc, total) => acc + total, 0);
//     return total;
// }
// console.log(findMax([3, 5, 7, 2, 8], [10, 20, 30, 5]));
// console.log(findMax([1, 2, 3,], [4, 5, 6]));
// Approach 3.
// // Helper function to find the maximum value in an array
// function findMax(arr: number[]): number {
//     if (arr.length === 0) {
//         throw new Error('Array must not be empty.');
//     }
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// // Main function to find the maximum sum from two arrays
// function findMaxSum(arr1: number[], arr2: number[]): number {
//     const max1 = findMax(arr1); // Find maximum value in the first array
//     const max2 = findMax(arr2); // Find maximum value in the second array
//     return max1 + max2; // Return the sum of the two maximum values
// }
// console.log(findMaxSum([3, 5, 7, 2, 8], [10, 20, 30, 5])); // Output: 38 (8 from the first array + 30 from the second array
// console.log(findMaxSum([1, 2, 3], [4, 5, 6])); // Output: 9 (3 from the first array + 6 from the second array)
// Q-28
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome('madam')); // Output: true
console.log(isPalindrome('hello')); // Output: false
console.log(isPalindrome('A man, a plan, a canal: Panama')); // Output: true
console.log(isPalindrome("No 'x' in Nixon")); // Output: true
console.log(isPalindrome('racecar')); // Output: true
console.log(isPalindrome('World')); // Output: false
export {};
