📌 Rule:
All TypeScript source code lives in .ts files.

⸻

## ESLint Disabled (Why?)

At the top of the file, ESLint is disabled.

## Why?
- Some demo code is intentionally written “wrong”
- ESLint would normally warn or error
- Disabling it keeps the demo clean and focused

⚠️ In real projects, you usually want ESLint enabled.

⸻

Rule #1: Always Start with const

## Core Recommendation (from the video)
- Use const by default
- Switch to let only if reassignment is required
- Never use var

⸻

## Strings in TypeScript

## Creating a String

const courseName = "ZTM TypeScript";

## Semicolons
- JavaScript can insert semicolons automatically
- But don’t rely on it

✅ Best practice: Always end statements with semicolons.

⸻

## String Quotes (All Valid)

const a = "double quotes";
const b = 'single quotes';
const c = `backticks`;

- Double quotes → OK
- Single quotes → OK (very common in projects)
- Backticks → special (template literals, covered later)

📌 Important:
Pick one style and use it consistently across the codebase.

⸻

## No “Character” Type

Unlike languages like C or Rust:
- TypeScript has no character type
- One letter or many → always string

⸻

## Numbers in TypeScript

const num = 42;
const decimal = 3.14;

## Exponents

const thousand = 1e3; // 1000


⸻

## Other Number Formats (Less Common)

## Octal (rare, mostly Linux permissions)

const octal = 0o755;

## Hexadecimal

const hex = 0xff;

## Binary

const binary = 0b1010;


⸻

## BigInt (Very Large Numbers)

const big = 9007199254740991n;

- Ends with n
- Used for extremely large integers

⸻

## Booleans

const yes = true;
const no = false;

- true / false
- Fundamental to control flow (covered later)

⸻

undefined vs null

undefined

const missing = undefined;

- Means something does not exist
- Common in frontend work (DOM lookups, API data)

⸻

null

const empty = null;

- Means we know it’s missing
- Explicitly set by the programmer

## Key Difference

## Value	Meaning
undefined	Missing, unknown
null	Missing, but intentionally


⸻

let — Reassignable Variables

let someNum = 0;
someNum = 1;
someNum = 2;

✔ Reassignment is allowed
❌ Redeclaration is not

let someNum = 5; // ❌ Error


⸻

const — No Reassignment

const empty = null;
empty = undefined; // ❌ Error

## Reason:
- const can only be assigned once

⸻

## Variable Shadowing (Advanced but Important)

## What Is Shadowing?

Creating a new variable inside a block with the same name.

let someNum = 2;

{
  let someNum = 5; // shadows outer variable
  // here, someNum === 5
}

// here, someNum === 2

## What’s Happening?
- Inner block temporarily hides the outer variable
- Outer variable still exists in memory
- Inner scope ignores it

## When Is This Useful?
- Mostly in test code
- Cleaner test cases without creating many variable names

⸻

## Uninitialized Variables

## Using let

let greeting;

- No value assigned yet
- Useful when value depends on future logic

## Example Use Case

let greeting;

// later...
greeting = "Hi";
// or "Hey"
// or "Hello"

📌 TypeScript Safety
- TypeScript errors if you try to use an uninitialized variable
- Prevents accidental runtime bugs

⸻

❌ const Cannot Be Uninitialized

const whoops; // ❌ Error

## Why?
- const only allows one chance to assign

✔ Correct usage:

const whoops = 3;

## Rule
- Need uninitialized → use let
- Have value immediately → use const

⸻

## Final Rules Summary

## Variable Rules
- ✅ const by default
- 🔁 let if reassignment is needed
- 🚫 Never use var

## Primitive Types Covered
- string
- number
- bigint
- boolean
- undefined
- null

⸻

## Key Takeaways
- Variables name data in memory so you don’t track memory yourself
- TypeScript enforces safer rules around reassignment and usage
- Scope and shadowing are powerful—but should be used carefully
- TypeScript helps catch mistakes before code runs

