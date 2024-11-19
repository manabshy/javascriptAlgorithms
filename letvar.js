function x() {
    var i = 1;
    setTimeout(function() {
        console.log(i);
    },3000);
    console.log('Test');
}
//x();


function y() {
    for (var i=1; i<=5; i++) {
        setTimeout(function() {
            console.log(i)
        },i * 1000)
    }
    console.log('Test ')
}
//y();

function z() {
    for (let i=1; i<=5; i++) {
        setTimeout(function() {
            console.log(i)
        },i * 1000)
    }
    console.log('Test Z')
}

z();