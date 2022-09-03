import React, { useState } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
const ListItem = (props) => {
  const [done, setDone] = useState(false);
  const checkHandler = () => {
    setDone(!done);
  };
  return (
    <div className="d-flex flex-row mb-3">
      <div className="input-group-text">
        <input
          className="form-check-input mt-0"
          type="checkbox"
          value="false"
          aria-label="Checkbox for following text input"
          onChange={checkHandler}
        />
      </div>
      <div className={`card-body ${done ? "line-through" : ""}`}>
        {props.name}
      </div>
      <button onClick={props.delete}>
        <RiDeleteBinFill />
      </button>
    </div>
  );
};
export default ListItem;
