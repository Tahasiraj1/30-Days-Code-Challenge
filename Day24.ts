// Q-47

function generateFibonacci(n: number): number[] {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const fibonacci: number[] = [0, 1];

    while (fibonacci.length < n) {
        const nextFibonacci = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        fibonacci.push(nextFibonacci);
    }

    return fibonacci;
}

console.log(generateFibonacci(5)); // Output: [0, 1, 1, 2, 3]
console.log(generateFibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]

// Q-48

function replaceVowels(str: string): string {
    return str.replace(/[aeiouAEIOU]/g, '*');
}

console.log(replaceVowels('Hello World'));
console.log(replaceVowels('Typescript'));
console.log(replaceVowels('Taha'));



