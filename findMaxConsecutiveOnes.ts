/*
Given a binary array nums, return the maximum number of consecutive 1's in the array.

Examples:

nums = [1,1,0,1,1,1]   ====>  3
nums = [1,0,1,1,0,1]   ====> 2
*/

function findMaxConsecutiveOnes(nums: number[]):number | undefined{
    let count: number = 0
    let maxConsecutive: number = 0 
    for (let num of nums) {
        if (num === 1) {
            count++
        } else {
            maxConsecutive = Math.max(maxConsecutive,count)
            count = 0
        }
    }
    // Update maxConsecutive in case the sequence ends with consecutive ones
    maxConsecutive = Math.max(maxConsecutive, count);
    return maxConsecutive
}




console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))