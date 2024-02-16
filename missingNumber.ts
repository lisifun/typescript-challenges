/*
Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.

Examples:

nums = [3,0,1]  ===>  2
nums = [0,1]    ===>  2
*/


function missingNumber(nums: number[]): number {
    const n = nums.length
    return (n*(n+1))/2 - nums.reduce((acc, num) => {return acc + num},0)
};


console.log(missingNumber([3,0,1]))
console.log(missingNumber([0,1]))