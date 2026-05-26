var g = 10;         //global scope

// var is function scoped

console.log(g);

function printHello() {
    console.log("Hello, I am Apoorva");
    var g = 20;     //local scope
    console.log("value of ge from function ", g);
    if (true) {
        var g = 30;
        console.log("value of g from if condition ", g);        //30
    }
}

printHello();

var g = 50;
