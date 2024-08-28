// Q-59

function numberToWords(num: number): string {
    const ones = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    // Case 1: Number is less than 10
    if (num < 10) {
        return ones[num];
    }

    // Case 2: Number is between 10 and 19
    if (num >=10 && num < 20) {
        return teens[num - 10];
    }

    // Case 3: Number is 20 or greater
    if (num >= 20 && num < 100) {
        const tensPart = Math.floor(num / 10);
        const onesPart = num % 10;

        if (onesPart === 0) {
            return tens[tensPart];
        } else {
            return `${tens[tensPart]}-${ones[onesPart]}`
        }
    }

    // Edge case: If the number is outside the expected range
    return "Number out of range";
}

console.log(numberToWords(45)); // Output: "Forty-Five"
console.log(numberToWords(13)); // Output: "Thirteen"
console.log(numberToWords(90)); // Output: "Ninety"
console.log(numberToWords(7));  // Output: "Seven"
  

// Q-60

// Approach 1: Using the Mathematical Formula.

function sumOfNaturalNumbers(n: number): number {
    if (n <= 0) {
        throw new Error("Input must be a positive integer.");
    }

    return (n * (n + 1)) / 2;
}

// Example usage
console.log(sumOfNaturalNumbers(5)); // Output: 15
console.log(sumOfNaturalNumbers(10)); // Output: 55
console.log(sumOfNaturalNumbers(100)); // Output: 5050

// Approach 2: Using a Loop

function SumOfNaturalNumbers(n: number): number {
    if (n <= 0) {
        throw new Error("Input must be a positive integer.");
    }
    
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

// Example usage
console.log(SumOfNaturalNumbers(5)); // Output: 15
console.log(SumOfNaturalNumbers(10)); // Output: 55
console.log(SumOfNaturalNumbers(100)); // Output: 5050