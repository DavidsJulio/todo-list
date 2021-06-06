import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";

function TodoItem(props) {
  const authContext = useContext(AuthContext);
  const userId = authContext.userId;
  let status = props.status;
  const btnMessage = status ? "Delete" : "Complete";
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
    <div>
      <p>{`Creation Date: ${props.creationDate}`}</p>
      <p>{`Finnish Date: ${props.finishDate}`}</p>
    </div>
  ) : (
    <p>{`Creation Date: ${props.creationDate}`}</p>
  );

  return (
    <div>
      <div>
        <h3>{props.name}</h3>
        {content}
      </div>
      <button onClick={onStatusChangeHandler}>{btnMessage}</button>
    </div>
  );
}

export default TodoItem;
