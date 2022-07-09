import React from 'react'

const TodoList = (props) => {
  return (
    <div>
    <ul className="allTodos">
    {props.todos.map((t) => (
      <li className="singletodo">
        <span className="todotext" key={t.id}>
          {t.todo}
        </span>
        <button onClick={() => props.handleEdit(t.id)}>Edit</button>
        <button onClick={() => props.handleDelete(t.id)}>Delete</button>
      </li>
    ))}
  </ul>
    </div>
  )
}

export default TodoList