// Q-37
function findMaxDifference(arr) {
    if (arr.length < 2)
        return 0;
    let minValue = arr[0];
    let maxDifference = 0;
    for (let i = 1; i < arr.length; i++) {
        const currentDifference = arr[i] - minValue;
        if (currentDifference > maxDifference) {
            maxDifference = currentDifference;
        }
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
    }
    return maxDifference;
}
console.log(findMaxDifference([2, 7, 9, 5, 1, 3, 5]));
// Q-38
function charFrequency(str) {
    const frequency = {};
    for (const char of str) {
        if (frequency[char]) {
            frequency[char] += 1;
        }
        else {
            frequency[char] = 1;
        }
    }
    return frequency;
}
console.log(charFrequency('hello'));
export {};
// Output: { h: 1, e: 1, l: 2, o: 1 }
