
// Function bind together its lexical scope - forms a closure
function x() {;
    for (var i = 1; i<=5; i ++) {
    setTimeout(() => {
       
        console.log(i);
    }, i * 1000);
}

    console.log("Test");
}
x();


// let is block scoped, it reference to a new copy of i
function y() {;
    for (let i = 1; i<=5; i ++) {
    setTimeout(() => {
       
        console.log(i);
    }, i * 1000);
  }
    console.log("Test");
}
y();
function func() {
    setTimeout(()=> {
       for (var i = 1; i<=5; i ++) {
           console.log(i);
       }
    },1000)
}

func();


function z() {
    for (var i = 1; i <=5; i++) {
        function close(z) {
            setTimeout(() => {
                console.log(z);
            }, z * 1000);
        }
        close(i);
    }
   console.log('Test');
}
z();