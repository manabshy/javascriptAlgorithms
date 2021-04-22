// Validate subsequence
// array = [5,1,22,25,6,-1,8,10]
// sequence = [1,6,-1,10]

// Sample output - true
// O(n) time | O(1) space - where n is the length of the array
function isValidSubsequence(array, sequence) {
    let arrIdx = 0;
    let seqIdx = 0;
    while (arrIdx < array.length && seqIdx < sequence.length) {
        if( array[arrIdx] === sequence[seqIdx]) seqIdx++;
        arrIdx++;
    }
    return seqIdx === sequence.length;
}
isValidSubsequence = isValidSubsequence([5,1,22,25,6,-1,8,10],[1,6,-1,10] );
console.log(isValidSubsequence);


// solution 2
// O(n) time | O(1) space - where n is the length of the array
function isValidSubsequence1(array, sequence) {
    let seqIdx = 0;
    for (const value of array) {
        if (seqIdx === sequence.length) break;
        if ( sequence[seqIdx] === value) seqIdx ++;
    }
    return seqIdx === sequence.length;
}

isValidSubsequence1 = isValidSubsequence1([5,1,22,25,6,-1,8,10],[1,6,-1,10] );
console.log(isValidSubsequence1);