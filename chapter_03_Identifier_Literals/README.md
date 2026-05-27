# Chapter 03 — Identifiers, Literals, and Comments

This chapter teaches the rules for naming JavaScript variables, the conventions used in code, and how comments make code easier to read.

---

## Files

| File | Topic | What it shows |
|------|-------|---------------|
| `06_Identifier_Rules.js` | Identifier rules | Valid JavaScript identifier syntax and invalid examples |
| `07_Identifier_Part2.js` | Naming conventions | camelCase, PascalCase, snake_case, and SCREAMING_SNAKE_CASE |
| `08_Comments.js` | Comments | Single-line, multi-line, and JSDoc-style comments |
| `js_identifier_rules.js` | Identifier examples | Case sensitivity, Unicode identifiers, and naming conventions in one file |
| `VS_Code_Keyboarad_Shortcut_Mac.md` | VS Code shortcuts (Mac) | Useful Mac editor shortcuts for productivity |
| `VS_Code_Keyboarad_Shortcut_Windows.md` | VS Code shortcuts (Windows) | Useful Windows editor shortcuts for productivity |

---

## Concepts covered

- ✅ JavaScript identifier syntax and allowed characters
- ✅ Case sensitivity: `myVar` is different from `myvar`
- ✅ Naming conventions for readability and team standards
- ✅ When to use camelCase, PascalCase, snake_case, and SCREAMING_SNAKE_CASE
- ✅ How comments document and disable code
- ✅ Using VS Code shortcuts to edit faster

---

### `06_Identifier_Rules.js`

Shows which characters can start a JavaScript identifier and how digits may appear after the first character.

Examples include:

- Names starting with letters, `_`, or `$`
- Identifiers with digits after the first character
- Invalid identifiers like starting with a number or using reserved keywords

---

### `07_Identifier_Part2.js`

Explains naming conventions used by JavaScript developers.

Key patterns:

- `camelCase` for variables and functions
- `PascalCase` for constructors and classes
- `snake_case` for older styles or configuration values
- `SCREAMING_SNAKE_CASE` for constants

---

### `08_Comments.js`

Demonstrates comments that explain code without running it.

Examples include:

- Single-line comments using `//`
- Multi-line comments using `/* ... */`
- JSDoc-style comments for documentation

---

### `js_identifier_rules.js`

A more complete example with identifier rules, naming patterns, Unicode identifiers, and console output.

It reinforces what valid identifiers look like and why naming conventions matter for readability.

---

## How to run

```bash
node chapter_03_Identifier_Literals/06_Identifier_Rules.js
node chapter_03_Identifier_Literals/07_Identifier_Part2.js
node chapter_03_Identifier_Literals/08_Comments.js
node chapter_03_Identifier_Literals/js_identifier_rules.js
```

---

## Takeaway

After this chapter, you should be able to choose good variable names, understand the rules that make identifiers valid, and use comments to explain and maintain code.
