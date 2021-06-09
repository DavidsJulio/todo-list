import classes from "./TodoDone.module.css";
import useHttp from "../../hooks/use-http";

function TodoDone() {
  const todosList = useHttp(true);

  return (
    <div>
      <h3>Done</h3>
      <div className={classes.list}>
        <ul>{todosList}</ul>
      </div>
    </div>
  );
}

export default TodoDone;
