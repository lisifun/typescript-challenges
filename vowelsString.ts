/*
You are given a 0-indexed array of string words and two integers left and right.

A string is called a vowel string if it starts with a vowel character and ends 
with a vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.

Return the number of vowel strings words[i] where i belongs to the inclusive 
range [left, right].

Examples:

words = ["are","amy","u"], left = 0, right = 2   ===> 2
words = ["hey","aeo","mu","ooo","artro"], left = 1, right = 4  ===> 3
*/

function vowelsStrings(words: string[], left: number, right:number): number | undefined {
    const vowels: string = 'aeiou'
    let count: number = 0

    for (let i:number = left; i <= right; i++) {
        let word: string = words[i]
        if (vowels.includes(word[0]) && vowels.includes(word[word.length - 1])) {
            count++
        }
    }
    return count
}


console.log(vowelsStrings(["are","amy","u"], 0, 2))
console.log(vowelsStrings(["hey","aeo","mu","ooo","artro"], 1, 4))
console.log(vowelsStrings(["true","false","apple","auto","u"], 0, 3))