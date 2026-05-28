# Chapter 1 — Basics

This chapter covers the absolute fundamentals of JavaScript that every developer needs to know. Learn how to run your first program, work with variables, loops, and inspect the Node.js environment.

## Files

| File | Topic | What it shows |
|------|-------|---------------|
| `01_Basic.js` | First program | Console output — how to print text to the terminal |
| `02_JS.js` | Variables and loops | `let` variable, `for` loop, and function calls |
| `03_Js_Commands.js` | Node.js process object | Platform, Node version, architecture, CWD |
| `04_HotCode.js` | Function calls in loops | Calling a function 10,000 times and tracking final result |

## Concepts Covered

- Console output with `console.log()`
- `let` variables and block scoping
- `for` loops and loop counters
- Function declaration and invocation
- Reading Node.js runtime via `process` (platform, version, arch, cwd)
- Basic performance / hot-code patterns (repeated calls)

---

## Files (explained)

### `01_Basic.js`

Simple program to print a message.

```js
console.log("THIS IS 1ST PROGRAM");
```

Run:

```powershell
node chapter_01_Basics/01_Basic.js
```

### `02_JS.js`

Variables, loops, and function calls.

```js
let x = 10;
console.log(x);

for(let x = 0; x < 10000; x++) {
    console.log(x);
    print();
}

function print() {
    console.log("Hello World");
}
```

Note: the `x` inside the `for` is block-scoped and does not overwrite the outer `x`.

Run:

```powershell
node chapter_01_Basics/02_JS.js
```

### `03_Js_Commands.js`

Inspect Node environment.

```js
console.log(process.platform);
console.log(process.version);
console.log(process.arch);
console.log(process.cwd());
```

Run:

```powershell
node chapter_01_Basics/03_Js_Commands.js
```

### `04_HotCode.js`

Function calls in a tight loop to illustrate repeated execution.

```js
function add(a, b) { return a + b; }
let result;
for (let i = 0; i < 10000; i++) result = add(i, i+1);
console.log("After 10000 calls:" + result);
```

Run:

```powershell
node chapter_01_Basics/04_HotCode.js
```

---

## Takeaway

Master the building blocks shown here: logging, variables, loops, functions, and inspecting runtime information. These basics make later automation and testing scripts clear and predictable.
# Chapter 01 — Basics

First steps in JavaScript on Node.js. This chapter gets your environment talking, runs your first `console.log`, verifies the runtime, and shows what happens when the same function is called many times — i.e. hot code behavior.

---

## Files

| File | Topic | What it shows |
|------|-------|---------------|
| `01_Basic.js` | Hello World | Prints a basic message and proves Node parses the file |
| `02_JS.js` | Variables, loops, functions | Demonstrates `let`, a loop, and a function call |
| `03_Js_Commands.js` | Environment detection | Uses the `process` object to inspect platform, architecture, Node version, and working directory |
| `04_HotCode.js` | Hot code / JIT warm-up | A function called 10,000 times to show repeated execution and runtime behavior |

---

## Concepts covered

- ✅ Running JavaScript on Node.js with `node <file>.js`
- ✅ `console.log` output
- ✅ `let` variable declaration and block scoping
- ✅ `for` loops and loop counters
- ✅ Function declaration and invocation
- ✅ `process.platform`, `process.arch`, `process.version`, and `process.cwd()`
- ✅ The idea of hot code and repeated execution
- 🎯 Confirming the dev setup before moving on

---

### `01_Basic.js`

The classic first script. Prints a simple message and proves Node can execute a JavaScript file.

```js
console.log("THIS IS 1ST PROGRAM");
```

```bash
node chapter_01_Basics/01_Basic.js
```

---

### `02_JS.js`

A small demo of variables, looping, and functions.

- Declares `let x = 10`
- Runs a `for` loop from `0` to `9999`
- Calls `print()` inside the loop
- Demonstrates function declaration and reuse

```js
let x = 10;
console.log(x);

for (let x = 0; x < 10000; x++) {
    console.log(x);
    print();
}

function print() {
    console.log("Hello World");
}
```

> Note: this file prints a large amount of output. Redirect it if you want to inspect only the first lines.

---

### `03_Js_Commands.js`

A quick environment check using Node's built-in `process` object.

It prints:

- `process.platform` — OS identifier
- `process.arch` — CPU architecture
- `process.version` — Node.js version
- `process.cwd()` — current working directory

```js
console.log(process.platform);
console.log(process.version);
console.log(process.arch);
console.log(process.cwd());
```

---

### `04_HotCode.js`

Introduces the concept of hot code: a function called repeatedly, which is how V8 triggers optimization.

```js
console.log("Hello, World!");

function add(a, b) {
    return a + b;
}

let result;
for (let i = 0; i < 10000; i++) {
    result = add(i, i + 1);
}

console.log("After 10000 calls:" + result);
```

```bash
node chapter_01_Basics/04_HotCode.js
```

> The final result is `19999` because the last call is `add(9999, 10000)`.

---

## How to run

```bash
node chapter_01_Basics/01_Basic.js
node chapter_01_Basics/02_JS.js
node chapter_01_Basics/03_Js_Commands.js
node chapter_01_Basics/04_HotCode.js
```

No npm install required — just Node.

---

## Takeaway

If all four files run cleanly, your Node.js environment is working. You now know how to print output, declare variables, inspect the runtime, and see a basic hot code pattern.
