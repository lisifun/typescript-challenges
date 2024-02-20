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

    const mergedIntervals = [sortedMatrix[0]]

    for (let i= 1; i < sortedMatrix.length; i++) {
       const currentInterval = sortedMatrix[i]
       const lastMergedInterval = sortedMatrix[mergedIntervals.length - 1]

       if (currentInterval[0] <= lastMergedInterval[1]) {
        lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1])
       } else {
        mergedIntervals.push(currentInterval)
       }
       
    }

    return mergedIntervals
}

console.log(mergeIntervals([[1, 3], [2, 6], [10, 8], [18, 15]]))

