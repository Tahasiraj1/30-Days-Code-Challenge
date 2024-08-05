// Q-3
function fLElement(arr) {
    let firstElement = arr[0];
    let lastElement = arr[arr.length - 1];
    if (arr.length === 0) {
        return 0;
    }
    else if (arr.length === 1) {
        return [arr[0], arr[0]];
    }
    else {
        return [firstElement, lastElement];
    }
}
console.log(fLElement([2, 4, 6, 7, 8]));
console.log(fLElement([4]));
console.log(fLElement([]));
// Q-4
function largestElement(numArr) {
    let largestNum = numArr[0];
    if (numArr.length === 1) {
        return largestNum;
    }
    for (let i = 1; i < numArr.length; i++) {
        if (numArr[i] > largestNum) {
            largestNum = numArr[i];
        }
    }
    return largestNum;
}
console.log(largestElement([1, 2, 3, 4, 5, 6]));
console.log(largestElement([5]));
console.log(largestElement([1, -2, -8, -6, 3]));
export {};
