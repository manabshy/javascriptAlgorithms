function isPalindrome(string) {
    return string === string.split('').reverse().join('')
}

console.log(isPalindrome('aba'))


console.log('Manoj'.split('').reverse().join(''))



const colorArr = ["red", "yellow", "blue", "green", "white", "black"];

const [first, second] = colorArr;
console.log(first, second);


const freeCodeCamp = {
  frontend: "React",
  backend: "Node",
  database: "MongoDB",
};

const { frontend, backend } = freeCodeCamp;
console.log(frontend, backend);

const array = [1, 3, 4];
const obj = { ...array }


const arr = [1, 3, 4];
const arr2 = [...arr];
arr2.push(2);
arr2
arr

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100


class Polygon {
  constructor(...sides) {
    this.sides = sides;
  }
  // Method
  *getSides() {
    for (const side of this.sides) {
      yield side;
    }
  }
}

const pentagon = new Polygon(1,2,3,4,5);

console.log([...pentagon.getSides()]); // [1,2,3,4,5]



const myString = 'abcdaf';
myArray = myString.split('')
const hash = {}
for (let char of myString) {
    if (!(char in hash)) {
        hash[char] = 0
    }
    hash[char]++
    char
}
hash


const myWord = 'cemani'

let c = myWord.split('').sort().join('')
c



function groupAnagrams(words) {
  const anagram = {}
  for (let word of words) {
    let sortedword = word.split('').sort().join('');
    if (anagram[sortedword]) {
      anagram[sortedword].push(word)
    } else {
      anagram[sortedword] = [word]
    }
   
  }
   anagram
   return Object.values(anagram)
}

groupAnagrams(['yo', 'oy', 'iceman', 'manice', 'iceman'])


const hashMap = {}
if (hashMap['abc']) {
    hashMap['abc'].push('manoj');
}
else {
    hashMap['abc'] = ['jonam']
}
hashMap


const set1 = new Set([1, 2, 3, 4, 5]);
set1

const X = function () {
  // "this" here is the caller of X
}

const Y = () => {
  // "this" here is NOT the caller of Y
  // It is the same "this" found in Y's scope
}


this.id = 'exports';
const testerObj = {
  func1: function () {
    console.log('func1', this);
  },
  func2: () => {
    console.log('func2', this);
  }
}

testerObj.func1()
testerObj.func2()


const https = require("https");
const { resolve } = require("path");
function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (rd) => data = data + rd);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    });
  });
}
fetch('https://www.javascript.com/').then(data => { console.log(data.length) });

(async function read(params) {
  const data = await fetch("https://www.javascript.com/");
  console.log(data.length);
  
})();