// Sorted Squared Array
// array = [1,2,3,5,6,8,9];
// output = [1,4,9,25,36,81];

// O(nlogn) time | O(n) space - where n is the length of the input array

function sortedSquaredArray(array) {
    const sortedSquares = new Array(array.length).fill(0); //?
    for ( let idx=0; idx < array.length; idx ++) {
        const value = array[idx]; // ?
        sortedSquares[idx] = value * value; // ?
    }
    sortedSquares.sort((a,b) => a - b); 
    return sortedSquares;//?
} 

sortedSquaredArray([1,2,3,5,6,8,9]);