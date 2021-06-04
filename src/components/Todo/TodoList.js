import { useState, useContext } from "react";
import Card from "../UI/Card";
import TodoDone from "./TodoDone";
// import TodoImportant from "./TodoImportant";
import TodoOngoing from "./TodoOngoing";
import classes from "./TodoList.module.css";
import AuthContext from "../../store/auth-context";

function Todo() {
  const [todo, setTodo] = useState("");
  const authContext = useContext(AuthContext);
  const userId = authContext.userId;

  const todoInputChangeHandler = (event) => {
    setTodo(event.target.value);
  };

  const sendHandler = (event) => {
    fetch(
      `https://todo-app-2fc21-default-rtdb.firebaseio.com/todos/${userId}.json`,
      {
        method: "POST",
        body: JSON.stringify(todo),
      }
    );

    setTodo("");
  };

  return (
    <Card>
      <div className={classes.container}>
        <div className={classes.add}>
          <input value={todo} type="text" onChange={todoInputChangeHandler} />
          <button onClick={sendHandler}>Add Todo</button>
        </div>
        <div className={classes.grid}>
          <TodoOngoing />
          <TodoDone />
          {/* <TodoImportant /> */}
        </div>
      </div>
    </Card>
  );
}

export default Todo;
