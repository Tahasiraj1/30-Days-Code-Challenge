// Q-45

function calculateFactorial(n: number): number {
    if (n === 0 || n === 1) return 1;

    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(calculateFactorial(5)); // Output: 120
console.log(calculateFactorial(0)); // Output: 1
console.log(calculateFactorial(7)); // Output: 5040

// Q-46

function covertToBinary(num: number): string {
    if (num === 0) return '0';

    let binary = '';

    while (num > 0) {
        // Get the remainder when num is divided by 2
        let remainder = num % 2;
        // binary = remainder + binary;
        binary += remainder;
        // repeatedly dividing by 2, to get quotent, for the loop to continue.
        num = Math.floor(num / 2);
    }

    return binary
}

console.log(covertToBinary(13));
console.log(covertToBinary(0));
console.log(covertToBinary(255));


