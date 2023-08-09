import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
