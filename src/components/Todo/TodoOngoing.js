import React, { useEffect, useState, useContext } from "react";
import classes from "./TodoOngoing.module.css";
import AuthContext from "../../store/auth-context";
import TodoItem from "./TodoItem";

function TodoOngoing() {
  const authContext = useContext(AuthContext);
  const [todo, setTodo] = useState([]);
  const userId = authContext.userId;

  const url = `https://todo-app-2fc21-default-rtdb.firebaseio.com/todos/${userId}.json`;

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(url);
      const responseData = await response.json();
      const loadedTodos = [];

      if (responseData) {
        for (const key in responseData) {
          loadedTodos.push({
            id: key,
            name: responseData[key].name,
            status: responseData[key].status,
            creationDate: responseData[key].creationDate,
          });
        }

        setTodo(loadedTodos);
      }
    };

    fetchTodos();
  }, [todo, url]);

  const todosList = todo.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        id={todo.id}
        name={todo.name}
        status={todo.status}
        creationDate={todo.creationDate}
      />
      // <li key={todo.id} onClick={doneHandler}>
      //   {todo.name}
      // </li>
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
