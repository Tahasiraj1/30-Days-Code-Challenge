// Q-7

function findDuplicates(numbers: number[]): number[] {
    const duplicateArr: number[] = [];
    const newArr: number[] = [];

    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i];

        let isDuplicate = false;
        for (let j = 0; j < newArr.length; j++) {
            if (newArr[j] === currentNumber) {
                isDuplicate = true;
            }
        }

        if (isDuplicate) {
            let isDuplicateAlreadyRecorded = false;
            for (let k = 0; k < duplicateArr.length; k++) {
                if (duplicateArr[k] === currentNumber) {
                    isDuplicateAlreadyRecorded = true;
                }
            }

            if (!isDuplicateAlreadyRecorded) {
                duplicateArr.push(currentNumber);
            }
        } else {
            newArr.push(currentNumber);
        }
    }
    return duplicateArr;
}

const numbers = [1, 2, 3, 2, 4, 5, 5, 6, 3];
const duplicates = findDuplicates(numbers);
console.log(duplicates); // Output: [2, 5]
  