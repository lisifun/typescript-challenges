/*
Write a JavaScript function to find the most frequent element in an array.

Requirements:

The function should be named findMostFrequent.

The input can be an array of any elements (numbers, strings, etc.).

The output should be the element that occurs the most times in the array.

If there are multiple elements with the same highest frequency, return any one of them.

Consider the efficiency of your algorithm.

Example Usage:

findMostFrequent([1, 3, 3, 3, 2, 2, 1, 1, 1, 1]); // should return 1

findMostFrequent(['apple', 'banana', 'apple', 'orange', 'banana', 'apple']); // should return 'apple'
*/

function findMostFrequent(arr: any[]): string | undefined{
    const elementFr: {[key:string]:number} = {}
    for (let element of arr) {
        if (elementFr[element]){
            elementFr[element] += 1 
        } else {
            elementFr[element] = 1    
        }
    } 

    const frequency = Object.values(elementFr)
    const maxFr = Math.max(...frequency)

    for (let key in elementFr) {
        if (elementFr[key] === maxFr) {
            return key
        }
    }
    return undefined
}

console.log(findMostFrequent([1, 3, 3, 3, 2, 2, 1, 1, 1, 1,3,3,3,3,3,3,3,3]))
console.log(findMostFrequent(['apple', 'banana', 'apple', 'orange', 'banana', 'apple']))