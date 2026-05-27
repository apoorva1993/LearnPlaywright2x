# Chapter 04 — JavaScript Concepts (Advanced Basics)

This chapter explores variable declarations, scope, hoisting, and function behavior in JavaScript.
It is designed to help you understand the differences between `var`, `let`, and `const`, and how JavaScript handles scope and initialization.

---

## Files

| File | Topic | What it shows |
|------|-------|---------------|
| `09_var_let_const.js` | `var`, `let`, `const` | Basic differences between the three declaration keywords |
| `10_functions.js` | Functions | How function declarations work and repeated calls behave |
| `11_var_explained.js` | `var` scoping | Function-scoped `var` and how block redeclaration behaves |
| `12_let_people_love.js` | `let` block scope | How `let` is scoped to blocks and why redeclaration is disallowed |
| `13_const_explained.js` | `const` behavior | Why `const` cannot be reassigned and how it works with block scope |
| `14_var_functionscope.js` | Function scope | How `var` behaves inside functions and nested blocks |
| `15_let_scope.js` | Block scope | How `let` values stay local to each block |
| `16_Hoisting.js` | Hoisting | How `var` declarations are hoisted and why initial values are `undefined` |
| `17_hoisting_fn.js` | Function hoisting | How functions and `var` are hoisted inside a function body |
| `18_let_hoisting.js` | TDZ | Why `let` cannot be accessed before declaration |
| `19_let_hoisting_block.js` | Block TDZ | How `let` behaves inside a block compared to the outer scope |
| `20_let_const.js` | `const` rules | The importance of declaring `const` before use |
| `21_Jr_QA.js` | Constant initialization | What happens when a constant is accessed before it is declared |

---

## Concepts covered

- ✅ `var`, `let`, and `const` declarations
- ✅ Function scope vs block scope
- ✅ Hoisting of `var` and functions
- ✅ Temporal Dead Zone (TDZ) for `let` and `const`
- ✅ Why `var` can be redeclared and `let`/`const` cannot
- ✅ How JavaScript initializes variables before execution

---

### `09_var_let_const.js`

Compares the three declaration forms and illustrates the behavior of `var` when redeclared.

```js
var v = 10;
const c = 20;
let l = 30;

var browser = "chrome";
var browser = "firefox";
browser = "edge";
```

---

### `10_functions.js`

A minimal function example to show declaration and repeated invocation.

```js
function greet() {
    console.log("Hi!, I am Greet. How are you?")
}


```

---

### `11_var_explained.js`

Teaches that `var` is function-scoped, not block-scoped, so redeclarations inside a function affect the same variable.

Example:

```js
var g = 10;
function printHello() {
    var g = 20;
    if (true) {
        var g = 30;
    }
}
```

---

### `12_let_people_love.js`

Shows that `let` is block-scoped and does not allow redeclaration in the same scope.

---

### `13_const_explained.js`

Shows that `const` bindings cannot be reassigned and are useful for values that should not change.

---

### `14_var_functionscope.js`

Shows how `var` declarations inside a function are scoped to the entire function, including nested blocks.

---

### `15_let_scope.js`

Shows how `let` creates a new variable for each block, so the outer and inner `l` are separate.

---

### `16_Hoisting.js`

Demonstrates hoisting: `var` declarations are moved to the top of the scope and initialized with `undefined`.

---

### `17_hoisting_fn.js`

Shows function hoisting and how `var` variables inside a function are hoisted to the top of that function.

---

### `18_let_hoisting.js`

Shows the Temporal Dead Zone for `let` and why accessing `score` before declaration throws a runtime error.

---

### `19_let_hoisting_block.js`

Shows how block-scoped `let` variables are separate from the outer scope.

---

### `20_let_const.js`

Shows that `const` must be declared before use and cannot be reassigned.

---

### `21_Jr_QA.js`

Demonstrates a constant declaration and the runtime error that occurs when it is accessed before initialization.

---

## How to run

```bash
node chapter_04_JavaScript_Concepts/09_var_let_const.js
node chapter_04_JavaScript_Concepts/10_functions.js
node chapter_04_JavaScript_Concepts/11_var_explained.js
node chapter_04_JavaScript_Concepts/12_let_people_love.js
node chapter_04_JavaScript_Concepts/13_const_explained.js
node chapter_04_JavaScript_Concepts/14_var_functionscope.js
node chapter_04_JavaScript_Concepts/15_let_scope.js
node chapter_04_JavaScript_Concepts/16_Hoisting.js
node chapter_04_JavaScript_Concepts/17_hoisting_fn.js
node chapter_04_JavaScript_Concepts/18_let_hoisting.js
node chapter_04_JavaScript_Concepts/19_let_hoisting_block.js
node chapter_04_JavaScript_Concepts/20_let_const.js
node chapter_04_JavaScript_Concepts/21_Jr_QA.js
```

---

## Takeaway

This chapter prepares you to understand variable scope, hoisting, and modern JavaScript declarations before you move into more advanced automation and testing code.
