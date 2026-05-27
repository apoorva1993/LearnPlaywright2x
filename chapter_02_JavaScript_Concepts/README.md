# Chapter 02 — JavaScript Concepts

This chapter builds on the basics and explains how JavaScript handles `var`, assignment, and simple runtime output.

---

## Files

| File | Topic | What it shows |
|------|-------|---------------|
| `05_JS_Basics.js` | `var` and reassignment | How `var` stores a value, updates it, and prints it to the console |

---

## Concepts covered

- ✅ `var` declaration and how it differs from `let`
- ✅ Variable assignment and reassignment
- ✅ Outputting values with `console.log`
- ✅ Running JavaScript with Node.js

---

### `05_JS_Basics.js`

A tiny file that shows how a variable can be declared, printed, and then updated.

```js
var v = 1;
console.log(v);

v = 12;
```

This is the first step toward understanding JavaScript variable behavior.

---

## How to run

```bash
node chapter_02_JavaScript_Concepts/05_JS_Basics.js
```

No dependencies needed — just Node.js.

---

## Takeaway

After this file, you should understand that `var` creates a variable that can be updated later, and you can verify runtime behavior with `console.log`.
