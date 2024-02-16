/*
Given a non-empty array of integers nums, every element appears 
twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and 
use only constant extra space.

Examples:

nums = [2,2,1]  ===> 1
nums = [4,1,2,1,2]  ===> 4
nums = [1] ===> 1
*/

function singleNumber(nums: number[]): number | undefined {
    const myObjt: {[key:string]:number} = {}
    for (let num of nums) {
        if (myObjt[num]) {
            myObjt[num] += 1
        } else {
            myObjt[num] = 1
        }
    }



    for (let key in myObjt) {
        if (myObjt[key] === 1) {
            return Number(key)
        }
    }
    return undefined

}

console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))
console.log(singleNumber([1]))