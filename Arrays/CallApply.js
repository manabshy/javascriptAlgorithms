let name = {
    firstname: "Manoj",
    lastname: "Bisht",
 
}

 let printFullName = function(hometown, state)  {
    console.log(this.firstname + "" + this.lastname + " from " + hometown + "," + state);
}
 printFullName.call(name, "Woking", "Surrey");

let myname = {
    firstname: "Sachin",
    lastname: "Tendulkar",
}

// Using Call method we can do - function borrowing
printFullName.call(myname, "Mumbai", "Maharashtra" );
printFullName.apply(myname, ["Mumbai", "Maharashtra"]);

// bind method

let printMyName = printFullName.bind(myname, "Mumbai", "Maharashtra");
console.log(printMyName); // Keeps copy of the function that can be invoked later
printFullName();