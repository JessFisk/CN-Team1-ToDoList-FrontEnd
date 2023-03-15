const API_URL = "http://localhost:3000/todos/";

async function createTodo(task) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task })
  });
  const newTodo = await response.json();
  return newTodo;
}

async function deleteTodo(id) {
  const response = await fetch(`${API_URL}${id}`, {
    method: "DELETE"
  });
  const message = await response.json();
  return message;
}

async function updateTodo(id, payload) {
  const response = await fetch(`${API_URL}${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const newTodo = await response.json();
  return newTodo;
}

async function getAllTodos() {
  const response = await fetch(API_URL);
  const todos = await response.json();
  return todos;
}

export default { createTodo, deleteTodo, updateTodo, getAllTodos };
