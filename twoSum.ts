/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Examples:

nums = [2,7,11,15], target = 9  ===> [0,1]
nums = [3,2,4], target = 6  ===> [1,2]
nums = [3,3], target = 6  ===> [0,1]
*/

function twoSum(nums: number[], target: number): number[] | undefined {
    for (let i: number = 0; i < nums.length - 1; i++) {
        for (let j: number = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
}

console.log(twoSum([2,7,11,15],9 ))
console.log(twoSum([3,2,4],6))
console.log(twoSum([3,3], 6))

