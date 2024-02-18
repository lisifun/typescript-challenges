/*
Objective:
Write a function that merges overlapping intervals.

Requirements:
The function should be named mergeIntervals.
The input is an array of intervals where each interval is represented as an array of two integers [start, end]. The intervals are not necessarily sorted.
The output should be an array of merged intervals sorted in ascending order, without any overlaps.
Optimize the function for efficiency.

mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]);
// should return [[1, 6], [8, 10], [15, 18]]
*/


function mergeIntervals(matrix: number[][]): number[][] | undefined{
    const sortedMatrix = matrix.map((element) => {
        return element.sort((a,b) => a-b)
    })

    console.log(sortedMatrix)
    const result = []

    for (let i= 0; i < sortedMatrix.length; i++) {
       for (let j = 0; j < sortedMatrix[i].length; j++) {
            
       }
    }

    return undefined
}

console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]))