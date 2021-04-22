const quokka = [ {
    name: 'manoj',
    isAwesome: true
},
{
    name: 'john',
    isAwesome: false
}];

const myFilteredValue = quokka.filter(val => {
    return val.isAwesome
})

// console.log(myFilteredValue)

const myPromise = new Promise((res, rej) => {
    setTimeout(function() {
        res({blah: 'Hi world !'})
    },1000)
}); /*?.*/

const myPromise = new Promise((res, rej) => {
    setTimeout(function() {
        res({blah: 'Hi world !'})
    },1000)
}); /*?.*/
myPromise.then(val => console.log(val))


Math.random();

// const express = require('express');
// const app = express()
// const port = 9000
// app.get('/', (req,res) => res.send('Hello world Manoj'))

// app.listen(port, ()=> console.log('listening'))