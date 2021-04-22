'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}


// Complete the numberPairs function below.
function numberPairs(n, ar) {
    
 var obj = {};

  ar.forEach(item => {
    obj[item] = obj[item] ? obj[item] + 1 : 1;
  });
  
 /**
  obj = 
    {
    10: 4,
    20: 3,
    30: 1,
    50: 1
    }
  */
  return Object.values(obj).reduce((acc, curr) => {
    
    /** 
     *   acc = 0 [ because initial value is set to 0, otherwise it would be 4]
     *   curr = 4 [ because initial value is set to 0, otherwiser it would be index 1 of the obj, which is 3]
     * 
     */
    acc += Math.floor(curr / 2)
    return acc;
  }, 0); // 0 is the initial value
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = numberPairs(n, ar);

    ws.write(result + "\n");

    ws.end();
}

numberPairs(9, [1,3,4,5,5,4]);