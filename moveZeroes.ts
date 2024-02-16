/*
Given an integer array nums, move all 0's to the end of it while
maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Examples:

nums = [0,1,0,3,12]  ===> [1,3,12,0,0]
*/



function moveZeroes(nums:number[]): number[]{
    return nums.sort((a,b) => {return b ? 0 : -1})
}




console.log(moveZeroes([0,1,0,3,12]))