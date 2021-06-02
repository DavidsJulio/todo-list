import React from "react";
import classes from "./TodoOngoing.module.css";

function TodoOngoing() {
  return (
    <div className={classes.ongoing}>
      <h3>Todo</h3>
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

export default TodoOngoing;
