/*
You are given a string array words and a string s, where words[i] and s 
comprise only of lowercase English letters.

Return the number of strings in words that are a prefix of s.

A prefix of a string is a substring that occurs at the beginning of the string. 
A substring is a contiguous sequence of characters within a string.

Examples:

words = ["a","b","c","ab","bc","abc"], s = "abc"  ===> 3

words = ["a","a"], s = "aa"  ===>  2
*/

function countPrefixes(words: string[], s: string): number | undefined {
    let count: number = 0
    for (let word of words) {
        if (s.slice(0, word.length) === word) {
            count++ 
        }
    }
    return count
}


// Noice
function countPrefixes2(words: string[], s: string): number | undefined {
    let count: number = 0
    for (let word of words) {
        if (s.startsWith(word)) {
            count++
        }
    }
    return count
}


console.log(countPrefixes(["a","b","c","ab","bc","abc"], 'abc'))
console.log(countPrefixes(["a","a"], 'aa'))

console.log(countPrefixes2(["a","b","c","ab","bc","abc"], 'abc'))
console.log(countPrefixes2(["a","a"], 'aa'))