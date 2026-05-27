// JS Engine
// LINE BY LINE, , JIT Compilation

console.log(greeting);
var greeting = "Hello";
console.log(greeting);

// Behind the scenes:

// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"


// var a;
console.log(h);
var h = "Apoorva";
console.log(h);