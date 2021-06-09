import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./TodoItem.module.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
function TodoItem(props) {
  const authContext = useContext(AuthContext);
  const userId = authContext.userId;
  let status = props.status;
  const btn = status ? <BsTrashFill /> : <AiFillCheckCircle />;
  const url = `https://todo-app-2fc21-default-rtdb.firebaseio.com/todos/${userId}/${props.id}.json`;

  const onStatusChangeHandler = () => {
    status = !status;
    if (status === true) {
      fetch(url, {
        method: "PATCH",
        body: JSON.stringify({
          creationDate: props.creationDate,
          finishDate: new Date().toLocaleString(),
          id: props.id,
          name: props.name,
          status: status,
        }),
      });
    } else {
      fetch(url, {
        method: "DELETE",
      });
    }
  };

  const content = status ? (
    <div className={classes.todoDone}>
      <p>{`Creation Date: ${props.creationDate}`}</p>
      <p>{`Finnish Date: ${props.finishDate}`}</p>
    </div>
  ) : (
    <div className={classes.todoDone}>
      <p>{`Creation Date: ${props.creationDate}`}</p>
    </div>
  );

  return (
    <div className={classes.container}>
      <div className={classes.name}>
        <h1>{props.name}</h1>
        {content}
      </div>
      <div className={classes.divButton}>
        <button onClick={onStatusChangeHandler}>{btn}</button>
      </div>
    </div>
  );
}

export default TodoItem;
