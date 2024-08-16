// Q-29
function areAnagrams(str1, str2) {
    const normalizestr1 = str1.toLowerCase();
    const normalizestr2 = str2.toLowerCase();
    if (normalizestr1.length !== normalizestr2.length) {
        return false;
    }
    const charCount1 = new Array(26).fill(0);
    const charCount2 = new Array(26).fill(0);
    for (let i = 0; i < normalizestr1.length; i++) {
        const charIndex1 = normalizestr1.charCodeAt(i) - 97;
        const charIndex2 = normalizestr2.charCodeAt(i) - 97;
        charCount1[charIndex1]++;
        charCount2[charIndex2]++;
    }
    for (let i = 0; i < 26; i++) {
        if (charCount1[i] !== charCount2[i]) {
            return false;
        }
    }
    return true;
}
console.log(areAnagrams('spar', 'rasp'));
console.log(areAnagrams('hello', 'world'));
// Q-30
function reverseWords(sentence) {
    const words = sentence.trim().split(/\s+/);
    const reverseWords = words.reverse();
    return reverseWords.join(' ');
}
console.log(reverseWords('Hello World'));
console.log(reverseWords('The quick brown fox'));
console.log(reverseWords('  Typescript  '));
console.log(reverseWords(' T a h a '));
export {};
