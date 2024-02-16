/*
Given an integer array nums, return true if any value appears at 
least twice in the array, and return false if every element is distinct.

Examples:

nums = [1,2,3,1]  ===>  true
nums = [1,2,3,4] ==> false
nums = [1,1,1,3,3,4,3,2,4,2] ===> true
*/

function containsDuplicate(nums: number[]):boolean | undefined{
    const numFr: {[key: string]: number} = {}
    for (let num of nums) {
        if (numFr[num]) {
            return true
        }
        numFr[num] = 1
    }
    return false
}


console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))