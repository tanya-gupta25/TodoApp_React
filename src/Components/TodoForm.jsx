import React from "react";

const TodoForm = (props) => {
  return (
    <div>
      <form className="todoForm" onSubmit={props.handleSubmit}>
        <input type="text" onChange={props.todoval} value={props.todo}></input>
        <button type="submit">{props.edit ? "Edit" : "Go"}</button>
      </form>
    </div>
  );
};

export default TodoForm;
