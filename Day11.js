// Q-21
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        }
        else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        mergedArray.push(arr1[1]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray;
}
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8, 9];
console.log(mergeSortedArrays(arr1, arr2));
// Q-22
function firstNonRepeatedCharacter(s) {
    const charCount = {};
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (charCount[char] !== undefined) {
            charCount[char]++;
        }
        else {
            charCount[char] = 1;
        }
    }
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (charCount[char] === 1) {
            return char;
        }
    }
    return "";
}
const s = "Taha";
console.log(firstNonRepeatedCharacter(s));
export {};
