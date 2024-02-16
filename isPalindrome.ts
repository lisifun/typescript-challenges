/*
Given an integer x, return true if x is a 
palindrome
, and false otherwise.

Examples:

x = 121  ===>  true
x = -121 ===> false
x = 10  ===> false
*/


function isPalindrome(x: number): boolean | undefined {
    const len = x.toString().length
    let i: number = 0
    let j: number = len - 1

    while (i < j) {
        if (x.toString()[i] !== x.toString()[j]) {
            return false
        } else {
            i++ 
            j--
        }
    }
    return true
}

console.log(isPalindrome(121))
console.log(isPalindrome(122))
console.log(isPalindrome(2756572))
console.log(isPalindrome(10))