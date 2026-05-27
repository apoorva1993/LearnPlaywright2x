var a = 10;     //global scope
console.log(a);

function printHello() {
    console.log("Hello, I am Apoorva");
    var a = 20;     //local scope
    console.log("value of a from function ", a);        //20
    if (true) {
        var a = 30;
        console.log("value of a from if condition ", a);        //30
    }
    console.log("F-> ", a);        //30
}

console.log("value of a from global scope ", a);        //10    

printHello();