import React, { useState, useEffect } from "react";
import "./App.css";
import APIHelper from "./APIHelper.js";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const fetchedTodos = await APIHelper.getAllTodos();
        setTodos(fetchedTodos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchTodos();
  }, []);

  const handleCreateTodo = async (event) => {
    event.preventDefault();
    if (!todo) {
      alert("Please enter a task");
      return;
    }
    if (todos.some((t) => t.task === todo)) {
      alert(`Task "${todo}" already exists`);
      return;
    }
    try {
      const newTodo = await APIHelper.createTodo(todo);
      setTodos([...todos, newTodo]);
      setTodo("");
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  const handleDeleteTodo = async (event, id) => {
    event.stopPropagation();
    try {
      await APIHelper.deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((t) => t._id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleUpdateTodo = async (event, id) => {
    event.stopPropagation();
    const todoToUpdate = todos.find((t) => t._id === id);
    if (!todoToUpdate) {
      console.error(`Could not find todo with ID ${id}`);
      return;
    }
    const payload = { completed: !todoToUpdate.completed };
    try {
      const updatedTodo = await APIHelper.updateTodo(id, payload);
      setTodos((prevTodos) =>
        prevTodos.map((t) => (t._id === id ? updatedTodo : t))
      );
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          placeholder="Enter a task"
        />
        <button type="button" onClick={handleCreateTodo}>
          Add
        </button>
      </div>

      <ul>
        {todos.length ? (
          todos.map(({ _id, task, completed }, index) => (
            <li
              key={_id}
              onClick={(event) => handleUpdateTodo(event, _id)}
              className={completed ? "completed" : ""}
            >
              {task}{" "}
              <span onClick={(event) => handleDeleteTodo(event, _id)}>X</span>
            </li>
          ))
        ) : (
          <p>No tasks yet</p>
        )}
      </ul>
    </div>
  );
}

export default App;
