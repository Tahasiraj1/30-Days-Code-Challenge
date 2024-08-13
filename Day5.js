// Q-9
function multipleIperations(arr1, arr2) {
    function mergeArray(a, b) {
        let merge = [];
        for (let i = 0; i < a.length; i++) {
            merge.push(a[i]);
        }
        ;
        for (let j = 0; j < b.length; j++) {
            merge.push(b[j]);
        }
        ;
        return merge;
    }
    function arrayAreIdentical(a, b) {
        if (a.length !== b.length)
            return false;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i])
                return false;
        }
        return true;
    }
    function makeArraysIdentical(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            arr2[i] = arr1[i];
        }
    }
    function calculateProduct(num) {
        let product = 1;
        for (let i = 0; i < num.length; i++) {
            product *= num[i];
        }
        return product;
    }
    function calculateSum(num) {
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            sum += num[i];
        }
        return sum;
    }
    const len1 = arr1.length;
    const len2 = arr2.length;
    if (len1 === len2 && arrayAreIdentical(arr1, arr2)) {
        const mergedArray = mergeArray(arr1, arr2);
        return calculateProduct(mergedArray);
    }
    if (len1 !== len2) {
        let mergedArray1 = mergeArray(arr1, arr2);
        let middleElement = Math.floor(mergedArray1.length / 2);
        return mergedArray1[middleElement];
    }
    if (len1 === len2 && !arrayAreIdentical(arr1, arr2)) {
        makeArraysIdentical(arr1, arr2);
        const mergedArray = mergeArray(arr1, arr2);
        return calculateSum(mergedArray);
    }
    return 0;
}
console.log(multipleIperations([1, 3], [1, 3])); // Example output: Product of [1, 3, 1, 3] which is 9
console.log(multipleIperations([1, 2], [6, 4, 5])); // Example output: Middle element of [1, 2, 6, 4, 5] which is 6
console.log(multipleIperations([1, 2], [3, 4])); // Example output: Sum of [1, 2, 1, 2] which is 6
// Q-10
function extractFirstLetters(names) {
    let newArray = [];
    for (let i = 0; i < names.length; i++) {
        newArray.push(names[i][0]);
    }
    return newArray;
}
console.log(extractFirstLetters(["Saad", "Taha", "Abdullah", "Yahya"]));
export {};
