import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  // Function to add a new todo to the list
  const addTodo = (todo) => {
    setTodoList([...todoList, todo]);
  };

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
