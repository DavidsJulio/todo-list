import { useContext, useEffect, useState } from "react";
import TodoItem from "../components/Todo/TodoItem";
import AuthContext from "../store/auth-context";

const useHttp = (condition) => {
  const authContext = useContext(AuthContext);
  const [todo, setTodo] = useState([]);
  const userId = authContext.userId;
  const url = `https://todo-app-2fc21-default-rtdb.firebaseio.com/todos/${userId}.json`;

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(url);
      const responseData = await response.json();
      const loadedTodos = [];
      const ongoingTodos = [];

      if (responseData) {
        for (const key in responseData) {
          if (responseData[key].status) {
            loadedTodos.push({
              id: key,
              name: responseData[key].name,
              status: responseData[key].status,
              creationDate: responseData[key].creationDate,
              finishDate: responseData[key].finishDate,
            });
          } else {
            ongoingTodos.push({
              id: key,
              name: responseData[key].name,
              status: responseData[key].status,
              creationDate: responseData[key].creationDate,
              finishDate: responseData[key].finishDate,
            });
          }
        }
        if (condition) {
          setTodo(loadedTodos);
        } else {
          setTodo(ongoingTodos);
        }
      }
    };

    fetchTodos();
  }, [todo, url, condition]);

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

  return todosList;
};

export default useHttp;
