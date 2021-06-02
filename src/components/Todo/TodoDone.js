import React from "react";
import classes from "./TodoDone.module.css";

function TodoDone() {
  return (
    <div className={classes.done}>
      <h3>Done</h3>
      <div className={classes.list}>
        <ul>
          <li>Take dogs for a walk</li>
          <li>Learn React.js</li>
          <li>Get a Job</li>
          <li>Buy a book</li>
        </ul>
      </div>
    </div>
  );
}

export default TodoDone;
