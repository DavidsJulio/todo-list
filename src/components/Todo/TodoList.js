import React from "react";
import Card from "../UI/Card";
import TodoDone from "./TodoDone";
import TodoImportant from "./TodoImportant";
import TodoOngoing from "./TodoOngoing";
import classes from "./TodoList.module.css";

function Todo() {
  return (
    <Card>
      <div className={classes.add}>
        <input />
        <button>Add Todo</button>
      </div>
      <div className={classes.grid}>
        <TodoOngoing />
        <TodoDone />
        <TodoImportant />
      </div>
    </Card>
  );
}

export default Todo;
