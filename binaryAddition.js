// BINARY ADDITION of TWO NUMBERS
/*

1 + 1 = 10 - Carry 1
1 + 0 = 1
0 + 1 = 1
1 + 1 + 1 = 11 Carry 1
*/

var addBinary = function(a, b) {
    var loop = Math.max(a.length, b.length)
    var carry = 0
    let result = []
    let arrA = a.split('')
    let arrB = b.split('')
    console.log(arrA);
   for (var i = 0 ; i <= loop ; i++)  {
       console.log('hey:',arrA.pop() );
       const pos = parseInt(arrA.pop() || 0) + parseInt(arrB.pop() || 0) + carry
       carry = pos >= 2 ? 1 : 0
       if (pos === 1 || pos === 3) {
         result.unshift(1)
       } else if (pos === 2 || (pos === 0 && (i < loop - 1))) {
         result.unshift(0)
       }
   }
   return result.join('') || '0'
};


console.log(addBinary('101101', '111101'));