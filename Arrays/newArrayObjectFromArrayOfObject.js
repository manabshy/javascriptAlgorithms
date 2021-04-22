let array = [1,3,4,5,7];
let myclone= {...array} ;
console.log(myclone);


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

let myNewRealEstateObj = {};
let myNewRealEstate = [];
 realEstate.map(res => {
    myNewRealEstateObj.id = res.id;
    myNewRealEstateObj.name = res.name;
    myNewRealEstateObj.value = 1000;
    myNewRealEstate.push(myNewRealEstateObj);
})

    
console.log(myNewRealEstate);