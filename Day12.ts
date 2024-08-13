// Q-23

// function removeDuplicates(arr: number[]): number {
//     if (arr.length === 0) return 0;

//     let i = 0;

//     for (let j = 1; j < arr.length; j++) {
//         if (arr[j] !== arr[i]) {
//             i++;
//             arr[i] = arr[j];
//         }
//     }

//     return i + 1;
// }

// const arr = [1, 1, 2, 2, 3, 4, 4, 5];
// const length = removeDuplicates(arr);
// console.log(length);
// console.log(arr.slice(0, length));

// Q-24

function moveZeroes(arr: number[]): void {
    let lastNonZeroIndex = 0;


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[lastNonZeroIndex] = arr[i];
            lastNonZeroIndex++;
        }
    }

    for (let i = lastNonZeroIndex; i < arr.length; i++) {
        arr[i] = 0;
    }
}

const arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr);



