/*
Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same 
number of occurrences (i.e., the same frequency).

Examples:

s = "abacbc"  ===> true
s = "aaabb"   ===>  false
*/


function areOccurrencesEqual(s: string): boolean {
    const charFreq: {[key: string] :number} ={}
    for (let char of s) {
        if (charFreq[char]) {
            charFreq[char]+=1
        } else {
            charFreq[char] = 1
        }
    }

    const frValues = Object.values(charFreq)
    const referenceFr = frValues[0]
    return frValues.every((fr) => {return fr === referenceFr})
}

console.log(areOccurrencesEqual("abacbc"))
console.log(areOccurrencesEqual("aaabb"))