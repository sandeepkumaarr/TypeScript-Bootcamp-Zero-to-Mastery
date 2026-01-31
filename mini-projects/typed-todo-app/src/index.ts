type Todo = { id: string; text: string; done: boolean };

const todos: Todo[] = [];

export function addTodo(text: string) {
  const t: Todo = { id: String(Date.now()), text, done: false };
  todos.push(t);
  return t;
}
