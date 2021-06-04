import React, { useEffect, useState, useContext } from "react";
import classes from "./TodoOngoing.module.css";
import AuthContext from "../../store/auth-context";

function TodoOngoing() {
  const authContext = useContext(AuthContext);
  const [todos, setTodo] = useState([]);
  const userId = authContext.userId;

  const url = `https://todo-app-2fc21-default-rtdb.firebaseio.com/todos/${userId}.json`;

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(url);
      const responseData = await response.json();
      const loadedTodos = [];

      for (const key in responseData) {
        loadedTodos.push({
          id: key,
          name: responseData[key],
        });
      }

      setTodo(loadedTodos);
    };

    fetchTodos();
  }, [todos, url]);

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
        <ul>{todosList}</ul>
      </div>
    </div>
  );
}

export default TodoOngoing;
