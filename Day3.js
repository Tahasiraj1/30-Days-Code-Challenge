// Q-5
// function removeDuplicates(arr: number[]): number[] {
//     let newArray: number[] = [];
//     for (let i = 0; i < arr.length; i++) {
//         let condition = true;
//         for (let j = 0; j < newArray.length; j++) {
//             if (newArray[j] === arr[i]) {
//                 condition = false;
//             }
//         }
//         if (condition) {
//             newArray.push(arr[i]);
//         }
//     }
//     return newArray;
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// console.log(removeDuplicates([10, 10, 20, 30, 30]));
// Q-6
function findSecondLargest(arr) {
    let largestNumber = -Infinity;
    let secondLargestNumber = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            secondLargestNumber = largestNumber;
            largestNumber = arr[i];
        }
        else if (arr[i] > secondLargestNumber && arr[i] != largestNumber) {
            secondLargestNumber = arr[i];
        }
    }
    return secondLargestNumber;
}
console.log(findSecondLargest([1, 2, 3, 4, 5])); // Output: 4
console.log(findSecondLargest([10, 20, 30, 15, 25])); // Output: 25
console.log(findSecondLargest([5, 1, 2, 3, 4])); // Output: 4
export {};
