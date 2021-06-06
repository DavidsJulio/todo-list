import classes from "./TodoOngoing.module.css";
import useHttp from "../../hooks/use-http";

function TodoOngoing() {
  const todosList = useHttp(false);

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
