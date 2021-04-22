const a = [1,2,4,7];
const b = [2, 5, 6, 9, 10];
const c = a.concat(b).sort((a,b) => a>b);
console.log(c);