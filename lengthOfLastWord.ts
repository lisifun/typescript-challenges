/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Examples;

s = "Hello World" ===> 5
s = "   fly me   to   the moon  " ===> 4
s = "luffy is still joyboy"  ===> 6
*/

function lengthOfLastWord(s: string): number {
    const arr: string[] = s.trim().split(' ')
    return arr[arr.length - 1].length
};


console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))
