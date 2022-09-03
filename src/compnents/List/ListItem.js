import React, { useState } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
const ListItem = (props) => {
  const [done, setDone] = useState(false);
  const checkHandler = () => {
    setDone(!done);
  };
  return (
    <div className="d-flex flex-row border border-dark rounded">
      <div className="ms-4 mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          aria-label="Checkbox for following text input"
          onChange={checkHandler}
        />
      </div>
      <div className={`card-body ${done ? "line-through" : ""} ms-3`}>
        {props.name}
      </div>
      <button onClick={props.delete}>
        <RiDeleteBinFill />
      </button>
    </div>
  );
};
export default ListItem;
