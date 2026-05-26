var v = 10;
const c = 20;
let l = 30;

var browser = "chrome";
var browser = "firefox";    //redeclaration allowed
browser = "edge";           //reassignment allowed

// for, functions

var testCases = ["login", "logout", "signup"];

for (var i = 0; i < testCases.length; i++) {
    console.log("Running test:", testCases[i]);
}

console.log("Loop counter leaked outside:", i);

console.log("Hello");
console.log("Hello");
console.log("Hello");

function say() {
    console.log("Hi! from function");
}

say();
say();