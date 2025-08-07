import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim() !== "") {
      setTodos([...todos, { text: task, completed: false }]);
      setTask("");
    }
  };

  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="dashboard-container">
      <div className="todo-box">
        <h2>🗓️ To-Do List</h2>

        <div className="input-section">
          <input
            type="text"
            placeholder="Add your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="add-btn" onClick={handleAdd}>
            Add +
          </button>
        </div>

        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className={todo.completed ? "completed" : ""}>
              <span
                className="check-icon"
                onClick={() => toggleComplete(index)}
              >
                <i className="fa-solid fa-circle-check"></i>
              </span>

              <p>{todo.text}</p>

              <button
                className="delete-btn"
                onClick={() => handleDelete(index)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
