import { Link } from 'react-router-dom'

export function TodoPreview({ todo, onRemoveTodo }) {
  return (
    <section className="todo-preview">
      <p className={todo.isDone ? 'done' : ''}>{todo.txt}</p>
      <span className="date">
        {new Date(todo.createdAt).toDateString().substring(0, 10) +
          ', ' +
          new Date(todo.createdAt).toLocaleTimeString()}
      </span>
      <br />
      <button
        onClick={(ev) => {
          ev.stopPropagation()
          onRemoveTodo(todo._id)
        }}
      >
        Delete
      </button>
    </section>
  )
}
