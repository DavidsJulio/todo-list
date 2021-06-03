import React, { useEffect, useState } from "react";
import classes from "./TodoOngoing.module.css";

function TodoOngoing() {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(
        "https://todo-app-2fc21-default-rtdb.firebaseio.com/todos.json"
      );
      const responseData = await response.json();
      const loadedTodos = [];
      console.log(responseData);

      for (const key in responseData) {
        loadedTodos.push({
          id: key,
          name: responseData[key],
        });
      }

      setTodo(loadedTodos);
    };

    fetchTodos();
  }, [todos]);

  const doneHandler = () => {
    console.log("Done!");
  };

  const todosList = todos.map((todo) => {
    return (
      <li key={todo.id} onClick={doneHandler}>
        {todo.name}
      </li>
    );
  });

  return (
    <div className={classes.ongoing}>
      <h3>Todo</h3>
      <div className={classes.list}>
        <ul>
          {/* <li>Take dogs for a walk</li>
          <li>Learn React.js</li>
          <li>Get a Job</li>
          <li>Buy a book</li> */}
          {todosList}
        </ul>
      </div>
    </div>
  );
}

export default TodoOngoing;
