import React, { useState, useEffect } from "react";
import "./App.css";
import connection from "./connection.js";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await connection.getAllTodos();
      setTodos(todos);
    };
    fetchTodos();
  }, []);

  const handleCreateTodo = async () => {
    if (!todoInput.trim()) {
      alert("Please enter a task.");
      return;
    }
    const newTodo = await connection.createTodo(todoInput.trim());
    setTodos([...todos, newTodo]);
    setTodoInput("");
  };

  const handleDeleteTodo = async (id) => {
    await connection.deleteTodo(id);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const handleUpdateTodo = async (id) => {
    const todoToUpdate = todos.find((todo) => todo._id === id);
    const updatedTodo = await connection.updateTodo(id, {
      completed: !todoToUpdate.completed,
    });
    setTodos(
      todos.map((todo) =>
        todo._id === id ? { ...todo, completed: updatedTodo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Enter a todo"
        />
        <button type="button" onClick={handleCreateTodo}>
          Add
        </button>
      </div>

      <ul>
        {todos.length ? (
          todos.map(({ _id, task, completed }) => (
            <li
              key={_id}
              onClick={() => handleUpdateTodo(_id)}
              className={completed ? "completed" : ""}
            >
              {task}{" "}
              <span onClick={(e) => handleDeleteTodo(_id, e)}>X</span>
            </li>
          ))
        ) : (
          <p>No Todos Yet</p>
        )}
      </ul>
    </div>
  );
}

export default App;
