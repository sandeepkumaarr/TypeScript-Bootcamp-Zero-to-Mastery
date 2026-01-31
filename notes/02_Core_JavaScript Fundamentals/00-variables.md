Variables in TypeScript (and JavaScript)

## What is a variable?

### Core idea

When writing programs, we work with data:
- A shopping cart
- A home address
- A player's score in a game

All this data must be stored somewhere in memory. But as programmers, we don't care where the data lives in memory—we only care how to access it.

That's exactly what variables are for.

---

## Why variables matter

What variables do:
- Give useful names to data
- Automatically track where the data is stored
- Let us focus on logic, not memory locations

**Example:** Instead of remembering where a player's score is stored, we just use a variable like `score`. TypeScript handles the memory lookup for us.

---

## Creating variables (variable bindings)

To create a variable, we use a keyword. There are three keywords in JavaScript and TypeScript:
1. `let`
2. `const`
3. `var` (don't use)

---

## let — reassignable variables

From the video:
- `let` allows us to reassign data later
- Use it when the value needs to change

**Example:**

```ts
let score = 10;
score = 15; // allowed
```

**When to use `let`:**
- Scores
- Counters
- Values that evolve over time

---

## const — assign once (recommended)

From the video:
- `const` creates a binding that cannot be reassigned
- TypeScript will warn you if you try to reassign it
- This adds extra reliability

**Example:**

```ts
const playerName = "Alex";
playerName = "Sam"; // ❌ Error
```

![Variable bindings in TypeScript](../screenshots/Core%20JavaScript%20Fundamentals/variables/variables.png)

### Important clarification

`const` does **not** mean immutable. You cannot reassign the variable, but you can change the data inside it.

**Example:**

```ts
const scores = [10, 20, 30];
scores.push(40); // ✅ allowed
```

This is **not** allowed:

```ts
scores = [1, 2, 3]; // ❌ Error
```


---

## const vs immutability

| Concept | Meaning |
|---|---|
| `const` | Prevents reassignment |
| Immutable | Prevents modification |

`const` does not guarantee immutability.

---

## var — do not use

From the video:
- `var` is a legacy keyword
- Left over from early JavaScript
- Has confusing and unsafe behavior
- Hard to read and reason about

**Key rule:** Never use `var` under any circumstances. Everything `var` can do, `let` does better without the downsides.

---

## Best practices for variables

**Recommended rule:**
- Use `const` by default
- Use `let` only when reassignment is needed
- Never use `var`

This leads to:
- Safer code
- Fewer bugs
- Clearer intent

---

## Quick summary

**Key takeaways:**
- Variables give names to data stored in memory
- You don't manage memory manually—TypeScript does it for you
- `let` → reassignment allowed
- `const` → reassignment blocked (but data can still change)
- `var` → legacy and unsafe (avoid completely)