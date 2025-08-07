// src/components/todo/TodoItem.jsx
import React from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>❌</button>
    </div>
  );
};

export default TodoItem;
