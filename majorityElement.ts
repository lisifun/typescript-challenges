/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

Examples:

nums = [3,2,3] ===> 3
nums = [2,2,1,1,1,2,2]  ===> 2
*/

function majorityElement(nums: number[]): number | undefined {
    const numFr : {[key:string]:number} = {}
    for (let num of nums) {
        if(numFr[num]){
            numFr[num] += 1
        } else {
            numFr[num] = 1
        }
    }

    const frequencies = Object.values(numFr)
    const maxFr = Math.max(...frequencies)
    for (let key in numFr) {
        if (numFr[key] === maxFr) {
            return Number(key)
        }
    }
}

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))