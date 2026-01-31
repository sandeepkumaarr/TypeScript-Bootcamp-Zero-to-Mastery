type User = { id: number; name: string; email?: string };

function isValidUser(u: unknown): u is User {
  if (typeof u !== "object" || u === null) return false;
  const obj = u as Record<string, unknown>;
  return typeof obj.id === "number" && typeof obj.name === "string";
}

// Example usage
const example = { id: 1, name: "Alice" };
if (isValidUser(example)) {
  console.log("valid", example.name);
}

export { User, isValidUser };
