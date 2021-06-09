import { useState, useContext } from "react";
import Card from "../UI/Card";
import TodoDone from "./TodoDone";
import TodoOngoing from "./TodoOngoing";
import classes from "./TodoList.module.css";
import AuthContext from "../../store/auth-context";

function Todo() {
  const [nameValue, setNameValue] = useState("");
  const authContext = useContext(AuthContext);
  const userId = authContext.userId;

  const todoInputChangeHandler = (event) => {
    setNameValue(event.target.value);
  };

  const sendHandler = () => {
    fetch(
      `https://todo-app-2fc21-default-rtdb.firebaseio.com/todos/${userId}.json`,
      {
        method: "POST",
        body: JSON.stringify({
          name: nameValue,
          status: false,
          creationDate: new Date().toLocaleString(),
        }),
      }
    );

    setNameValue("");
  };

  return (
    <Card>
      <div className={classes.container}>
        <div className={classes.add}>
          <input
            value={nameValue}
            type="text"
            onChange={todoInputChangeHandler}
          />
          <button onClick={sendHandler}>Add Todo</button>
        </div>
        <div className={classes.grid}>
          <div className={classes.box1}>
            <TodoOngoing />
          </div>
          <div className={classes.box2}>
            <TodoDone />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Todo;
