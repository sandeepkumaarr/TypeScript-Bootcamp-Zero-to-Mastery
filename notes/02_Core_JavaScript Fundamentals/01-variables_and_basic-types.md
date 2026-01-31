## Rule #1: Always Start with `const`

### Best Practice
- Use `const` by default
- Use `let` **only** when reassignment is required
- Never use `var`

---

## Strings in TypeScript

### Creating a String
```ts
const courseName = "ZTM TypeScript";

Semicolons
	•	JavaScript can auto-insert semicolons
	•	Do not rely on this behavior

✅ Always end statements with semicolons.

⸻

String Quotes (All Valid)

const a = "double quotes";
const b = 'single quotes';
const c = `backticks`;

	•	Double quotes → valid
	•	Single quotes → valid (very common)
	•	Backticks → special (template literals, covered later)

📌 Pick one style and use it consistently.

⸻

No Character Type
	•	TypeScript does not have a separate char type
	•	One character or many → always string

⸻

Numbers in TypeScript

const num = 42;
const decimal = 3.14;

Exponents

const thousand = 1e3; // 1000


⸻

Other Number Formats (Less Common)

Octal (mostly Linux permissions)

const octal = 0o755;

Hexadecimal

const hex = 0xff;

Binary

const binary = 0b1010;


⸻

BigInt (Very Large Numbers)

const big = 9007199254740991n;

	•	Ends with n
	•	Used for extremely large integers

⸻

Booleans

const yes = true;
const no = false;

	•	true and false
	•	Foundation of program logic

⸻

undefined vs null

undefined

const missing = undefined;

	•	Means something does not exist
	•	Common in frontend development

null

const empty = null;

	•	Means intentionally missing
	•	Explicitly set by the programmer

Difference

Value	Meaning
undefined	Missing, unknown
null	Missing, but intentional


⸻

let — Reassignable Variables

let someNum = 0;
someNum = 1;
someNum = 2;

✔ Reassignment allowed
❌ Redeclaration not allowed

let someNum = 5; // Error


⸻

const — No Reassignment

const empty = null;
empty = undefined; // Error

	•	const allows only one assignment

⸻

Variable Shadowing

What Is Shadowing?

Redeclaring a variable inside a block using the same name.

let someNum = 2;

{
  let someNum = 5; // shadows outer variable
  // someNum === 5
}

// someNum === 2

Explanation
	•	Inner scope hides the outer variable
	•	Outer variable still exists
	•	Inner scope ignores it temporarily

When Useful?
	•	Mostly in test code
	•	Helps keep test cases clean

⸻

Uninitialized Variables

Using let

let greeting;

	•	No initial value
	•	Useful when value depends on later logic

Example:

let greeting;

// later in code
greeting = "Hi";

📌 TypeScript throws an error if you try to use it before assignment.

⸻

❌ const Cannot Be Uninitialized

const whoops; // Error

Correct usage:

const whoops = 3;

Rule
	•	Need uninitialized → use let
	•	Have value immediately → use const

⸻

Final Rules Summary

Variable Rules
	•	✅ const by default
	•	🔁 let when reassignment is needed
	•	🚫 Never use var

Primitive Types Covered
	•	string
	•	number
	•	bigint
	•	boolean
	•	undefined
	•	null

⸻

Key Takeaways
	•	Variables give names to memory-stored data
	•	TypeScript enforces safer reassignment rules
	•	Scope and shadowing are powerful tools
	•	Many bugs are caught before runtime

⸻