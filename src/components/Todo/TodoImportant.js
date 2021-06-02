import React from "react";
import classes from "./TodoImportant.module.css";

function TodoImportant() {
  return (
    <div>
      <h3>Important</h3>
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

export default TodoImportant;
