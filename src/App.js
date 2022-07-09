import React, { useState } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(0);

  /* This todoval is used for input so that whatever input we r gonna give it will show down*/
  const todoval = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // it will not refresh the page when we'll click on go

    if (edit) {
      const editTodo = todos.find((i) => i.id === edit);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      setEdit(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}- ${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const handleEdit = (id) => {
    const EditTodo = todos.find((i) => i.id === id);
    setTodo(EditTodo.todo);
    setEdit(id);
  };
  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <TodoForm handleSubmit={handleSubmit} todoval={todoval} todo={todo} edit={edit}/>
      <TodoList todos={todos} handleEdit={handleEdit} handleDelete={handleDelete}/>
      </div>
    </div>
  );
};

export default App;

