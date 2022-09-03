import React, { useRef } from "react";
import classes from "./Form.module.css";
const Form = (props) => {
  const inputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const inputvalue = inputRef.current.value;
    props.onAddItem(inputvalue);
    console.log(inputvalue);
    inputRef.current.value = "";
  };
  return (
    <div>
      <h1>ToDo List</h1>
      <div>
        <form className="d-flex flex-row" onSubmit={submitHandler}>
          <input
            type="text"
            ref={inputRef}
            placeholder="New Task"
            className="form-control"
          />
          <button className="ms-4 btn btn-info" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
export default Form;
