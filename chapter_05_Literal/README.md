# Chapter 05 — Literals

This chapter explains JavaScript literals — the values you write directly in code. You'll see how literals are created, how `null` and `undefined` differ, why strings can use different quote styles, and how template literals make string assembly easier.

## Files

| File | Topic | What it shows |
|------|-------|---------------|
| `22_Literal.js` | Basic literals | Number, string, boolean, `null`, and `undefined` |
| `23_null_undefined.js` | `null` vs `undefined` | When JS sets `undefined` and when you should use `null` |
| `24_null.js` | `null` explained | Explicit empty values and the `typeof null` quirk |
| `26_Literal_Number_all.js` | Number literals | Decimal, binary, octal, hex, exponential, BigInt, `Infinity`, and `NaN` |
| `27_String.js` | String literals | Single/double quotes, simple string values, and `typeof` checks |
| `28_Template_Literal.js` | Template literals | `${...}` interpolation, expressions, and dynamic text generation |
| `29_Backtick_single_double.js` | Backticks vs quotes | When to use `'`/`"` vs `` ` `` and how each behaves |

## Concepts covered

- Literal values are the raw values you type in code: numbers, strings, booleans, `null`, and `undefined`.
- `undefined` means a variable exists but has not been assigned a value yet.
- `null` is a developer-assigned value meaning "empty" or "no value".
- JavaScript number literals can be decimal, binary, octal, hexadecimal, exponential, or `BigInt`.
- `Infinity`, `-Infinity`, and `NaN` are special numeric values with unique behavior.
- Single quotes and double quotes both create strings; choose one style and stay consistent.
- Backticks create template literals, which support interpolation (`${}`), multi-line text, and expressions.
- Template literals are especially useful for building selectors, logs, JSON-like payloads, and dynamic messages.

---

## File details with examples

### `22_Literal.js`

Basic literal values and `typeof` behavior.

```js
let age = "pramod";
let isStudent = true;
let pi = 3.14;
let name = 'Alice';
let nullValue = null;
let undefinedValue;

console.log(typeof age);
console.log(typeof pi);
console.log(typeof isStudent);
console.log(typeof nullValue);
console.log(typeof undefinedValue);
```

Output:

```text
string
number
boolean
object
undefined
```

### `23_null_undefined.js`

Shows when `undefined` is automatic and when `null` is explicit.

```js
let userName;
console.log(userName);        // undefined
console.log(typeof userName); // "undefined"

function greet() {}
console.log(greet());         // undefined

let profilePicture = null;
console.log(profilePicture);        // null
console.log(typeof profilePicture); // "object"
```

Output:

```text
undefined
undefined
undefined
null
object
```

### `24_null.js`

Demonstrates `null` and `undefined` values with simple `typeof` checks.

```js
let no_code = null;
let apoorva_knows_drive;
let age = 0;
let code = "";
console.log(typeof code);
console.log(typeof age);
```

Output:

```text
string
number
```

### `26_Literal_Number_all.js`

A deeper look at JavaScript number literals, special values, and numeric styles.

```js
let decimal = 42;
let binary = 0b1010;
let octal = 0o52;
let hex = 0x2A;
let float1 = 3.14;
let exp1 = 1.5e3;
let million = 1_000_000;
let big = 123456789012345678901234567890n;
console.log("Decimal:", decimal);
console.log("Binary 0b1010:", binary);
console.log("Octal 0o52:", octal);
console.log("Hexadecimal 0x2A:", hex);
console.log("Float 3.14:", float1);
console.log("Exponential 1.5e3:", exp1);
console.log("Separator 1_000_000:", million);
console.log("BigInt literal:", big);
console.log("Infinity:", Infinity);
console.log("NaN:", NaN);
```

Output:

```text
Decimal: 42
Binary 0b1010: 10
Octal 0o52: 42
Hexadecimal 0x2A: 42
Float 3.14: 3.14
Exponential 1.5e3: 1500
Separator 1_000_000: 1000000
BigInt literal: 123456789012345678901234567890
Infinity: Infinity
NaN: NaN
```

### `27_String.js`

Shows string literals with single and double quotes and `typeof` results.

```js
let age = "pramod";
let isStudent = true;
let pi = 3.14;
let name = 'Alice';
let nullValue = null;
let undefinedValue;
console.log(typeof age);
console.log(typeof pi);
console.log(typeof isStudent);
console.log(typeof nullValue);
console.log(typeof undefinedValue);
```

Output:

```text
string
number
boolean
object
undefined
```

### `28_Template_Literal.js`

Uses backticks to build strings with interpolation and expressions.

```js
let firstname = "apoorva";
let fullname = `Hi ${firstname} Baranwal`;
console.log(fullname);

let env = "staging";
env = "prod";
const userId = 12345;
const apiUrl = `https://api-${env}.tekion.com/users/${userId}`;
console.log(apiUrl);

const testName = "Login Test";
const status = "FAILED";
const duration = 2.3;
console.log(`[${status}] ${testName} completed in ${duration}s`);

const username = "apoorva";
const role = "admin";
const payload = `{
  "user": "${username}",
  "role": "${role}",
  "timestamp": "${new Date().toISOString()}"
}`;
console.log(payload);
```

Output example:

```text
Hi apoorva Baranwal
https://api-prod.tekion.com/users/12345
[FAILED] Login Test completed in 2.3s
{
  "user": "apoorva",
  "role": "admin",
  "timestamp": "2026-06-04T...Z"
}
```

> Note: this file also contains Playwright-style `await page...` lines that require a Playwright test context to run.

### `29_Backtick_single_double.js`

Compares single quotes, double quotes, and backticks.

```js
let single = 'Hello World';
let double = "Hello World";
let name = "Apoorva";
let age = 15;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
let multiLine = `
  Line 1
  Line 2
  Line 3
`;
let sum = `10 + 20 = ${10 + 20}`;
console.log("Old way:", "The " + name + " costs " + age + " rupees.");
console.log("New way:", `The ${name} costs ${age} rupees.`);
```

Output:

```text
Single Quote: Hello World
Double Quote: Hello World
Backtick with variable: Hello, my name is Apoorva and I am 15 years old.
Backtick multi-line:
  Line 1
  Line 2
  Line 3
Old way: The Apoorva costs 15 rupees.
New way: The Apoorva costs 15 rupees.
```

---

## How to run

```powershell
node chapter_05_Literal/22_Literal.js
node chapter_05_Literal/23_null_undefined.js
node chapter_05_Literal/24_null.js
node chapter_05_Literal/26_Literal_Number_all.js
node chapter_05_Literal/27_String.js
node chapter_05_Literal/28_Template_Literal.js
node chapter_05_Literal/29_Backtick_single_double.js
```

---

## Comparison `'…'` vs `"…"` vs `` `…` ``

| Feature | `'single'` | `"double"` | `` `backtick` `` |
|---|:---:|:---:|:---:|
| Simple text | yes | yes | yes |
| Variable interpolation `${var}` | no | no | **yes** |
| Expressions `${a + b}` | no | no | **yes** |
| Multi-line without `\n` | no | no | **yes** |
| Escape needed for `"` | no | yes (`\"`) | no |
| Escape needed for `'` | yes (`\'`) | no | no |
| Playwright selector composition | clunky | clunky | **idiomatic** |

## Takeaway

Chapter 5 shows that literals are the simplest building blocks in JavaScript. Once you understand literal syntax and template strings, you can write clearer code for values, logs, selectors, and dynamic messages.
