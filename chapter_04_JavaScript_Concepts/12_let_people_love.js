// let - Block Scope
let a = 10;

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("Retry Attempt: ", retryCount);

//let retryCount = 5;

//let retryCount = 5; SyntaxError: Identifier 'retryCount' has already been declared

// ❌ SyntaxError: redeclaration not allowed

let testStatus = "pending";

// let testStatus = true;

if (testStatus == true) {
    let executionTime = 1200;
    console.log("Inside block: ", executionTime);
}

// console.log(executionTime); // ReferenceError: executionTime is not defined

// {} - Block 
// if(){} 
// funcion name(){}


// let = loyal
// var = varirable / triator


let name = "pending";
name = "done";