import React, { useContext, useEffect, useState } from "react";
import classes from "./TodoDone.module.css";
import TodoItem from "./TodoItem";
import AuthContext from "../../store/auth-context";

function TodoDone() {
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
          if (responseData[key].status === true) {
            loadedTodos.push({
              id: key,
              name: responseData[key].name,
              status: responseData[key].status,
              creationDate: responseData[key].creationDate,
              finishDate: responseData[key].finishDate,
            });
          }
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
        finishDate={todo.finishDate}
      />
    );
  });

  return (
    <div className={classes.done}>
      <h3>Done</h3>
      <div className={classes.list}>
        <ul>{todosList}</ul>
      </div>
    </div>
  );
}

export default TodoDone;
