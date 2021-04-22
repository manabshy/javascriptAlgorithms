/*
You have two sorted arrays, where each element is an interval. Now, merge the two array, overlapping intervals can be merged as a single one.

I/P :
List 1 [1,2] , [3,9]
List 2 [4,5], [8, 10], [11,12]

O/P [1,2], [3,10], [11,12]
*/
const _mergeOrConcatIntervals = (firstInterval, secondInterval) => {
    const result = [];

    if (!firstInterval || !secondInterval){
        result.push(firstInterval || secondInterval);
    }else if ((firstInterval[1] >= secondInterval[0] && firstInterval[1] <= secondInterval[1]) || 
        (secondInterval[1] >= firstInterval[0] && secondInterval[1] <= firstInterval[1])){
        result.push([
            Math.min(firstInterval[0], secondInterval[0]), 
            Math.max(firstInterval[1], secondInterval[1])
        ]);
    } else{
        result.push(...[firstInterval, secondInterval].sort((a,b) => a[1] - b[1]));
    }

    return result;
}

const mergeIntervals = (firstArray, secondArray) => {
    const mergedArray = [];
    let i=0, j=0;

    while (i<firstArray.length || j<secondArray.length){
        let currentInterval;
        const lastMergedInterval = mergedArray.pop();

        if (i >= firstArray.length || secondArray[j][0] <= firstArray[i][0]){
            currentInterval = secondArray[j];
            j++;
        } else{
            currentInterval = firstArray[i];
            i++;
        }

        let result = _mergeOrConcatIntervals(lastMergedInterval, currentInterval);
        mergedArray.push(...result);
    }

    return mergedArray;
};



const firstInterval = [[1,2],[3,9]];
const secondInterval = [[4,5],[8,10], [11,12]];
_mergeOrConcatIntervals(firstInterval, secondInterval);