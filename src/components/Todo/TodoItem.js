import React, { useState } from "react";

function TodoItem(props) {
  const [updateStatus, setUpdateStatus] = useState(props.status);

  const onStatusChangeHandler = () => {
    setUpdateStatus((prevStatus) => !prevStatus);
  };
  return (
    <div>
      <div>
        <h3>{props.name}</h3>
        <p>{`Creation Date: ${props.creationDate}`}</p>
      </div>
      <button onClick={onStatusChangeHandler}>Complete</button>
    </div>
  );
}

export default TodoItem;
