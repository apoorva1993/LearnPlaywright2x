let l = 10;     //global scope
console.log(l);

function printHello() {
    console.log("Hello, I am Apoorva");
    let l = 20;    //local scope
    console.log("value of l from function ", l);        //20
    if (true) {
        let l = 30;
        console.log("value of l from if condition ", l);        //30
    }
    console.log("value of l from function ", l);        //20
}

console.log("G ->", l);

printHello();