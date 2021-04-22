// Two Number Sum
// array = [3,5,-4,8,11,1,-1,6]
// targetSum = 10;
// Sample Output [-1,11]



// solution 1
// O(n^2) time | O(1) space
function twoNumberSum(array, targetSum) {
    for (let i=0; i<array.length; i++) {
        const firstNum = array[i];
        for( let j=i+1; j<array.length; j++) {
            const secondNum = array[j];
            if (firstNum + secondNum === targetSum) {
                return [firstNum, secondNum];
            }
        }
    }
    return [];
}

const myVal = twoNumberSum([3,5,-4,8,11,1,-1,6], 10)
console.log(myVal);


// solution 2
// O(n) time| O(n) space
function twoNumberSum1(array, targetSum) {
    const nums = {};
    for(const num of array) {
        const potentialMatch = targetSum - num;
        console.log(potentialMatch);
        if( potentialMatch in nums) {
            return[potentialMatch, num];
        } else {
            nums[num] = true;
            console.log(nums)
        }
    }
    return [];
}

const myVal1 = twoNumberSum1([3,5,-4,8,11,1,-1,6], 10)
console.log(myVal1);


// solution 3
// o(nlogn)) | o(1) space
function twoNumberSum2(array, targetSum) 
{
    array.sort((a,b) => a - b);
    console.log(array)
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        const currentSum = array[left] + array[right];
        if (currentSum === targetSum) {
            return [array[left], array[right]];
        } else if (currentSum < targetSum) {
            left ++;
        } else if (currentSum > targetSum) {
            right --;
        }
    }
    return [];
}

const myVal2 = twoNumberSum2([3,5,-4,8,11,1,-1,6], 10)
console.log(myVal2);
