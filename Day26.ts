// Q-51

function reverseNumber(n: number): number {
    let numStr = n.toString().split('').reverse().join('');
    return parseInt(numStr);
}

console.log(reverseNumber(1234));
console.log(reverseNumber(567));

// Q-52

function averageOfNumbersInString(str: string): number {
    const numbers: number[] = [];
    const regex = /\d+/g; // Regular expression to match one or more digits

    const matches = str.match(regex);

    if (matches) {
        for (const match of matches) {
            numbers.push(Number(match))
        }
    }

    if (numbers.length === 0) {
        return NaN; // Return NaN if no numbers found
    }

    let total = numbers.reduce((total, current) => total + current, 0);
    return total / numbers.length;
}

console.log(averageOfNumbersInString('The numbers are 12, 15, and 20.')); // Output: 15.666...
console.log(averageOfNumbersInString('No numbers here!')); // Output: NaN


///////////////////////////WRONG///////////////////////////////////////////////
// function averageOfNumberString(str: string): number {                     //
//     let numbers: number[] = [];                                           //
//                                                                           //
//     for (let i = 0; i <= str.length; i++) {                               //
//         if (typeof i === "number" ) {                                     //
//             numbers.push(i);                                              //
//         } else if(typeof i === "string") {                                //
//             return NaN;                                                   //
//         }                                                                 //
//     }                                                                     //
//                                                                           //
//     let total = numbers.reduce((total, current) => total + current, 0);   //
//     return total / numbers.length;                                        //
// }                                                                         //
//                                                                           //
// console.log(averageOfNumberString('The numbers are 12, 15, and 20.'));    //
// console.log(averageOfNumberString('No numbers here!'));                   //
// ////////////////////////////////////////////////////////////////////////////

