function outer() {
    let message = "Hi!!!!!!!";
    console.log("Outer CALLED!");
    function inner() {
        console.log(message);
    }
    return inner;
}


let fn_inner = outer();
fn_inner();

// inner(); // ReferenceError: inner is not defined