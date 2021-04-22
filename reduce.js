// Total sum of every item in an array

const array = [1,3,4,5,5,5,8];
const total = array.reduce((acc, initialTotal) => {
  return acc += initialTotal;
},0)
console.log(total)


// convert Array to an Object using reduce

const realEstate = [
    {
        id: '10111',
        name: 'Test0',
        price: 100
    },
    {
        id: '10112',
        name: 'Test1',
        price: 100
    },
    {
        id: '10113',
        name: 'Test2',
        price: 100
    },    
];

function reducer (acc, curr) {
    console.log(acc);
    return {...acc, [curr.id]: curr};
}

let realEstateObject = realEstate.reduce(reducer, {});
console.log(realEstateObject);



