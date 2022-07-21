import { TodoPreview } from './TodoPreview'

export function TodoList({ todos, onToggleTodo, onRemoveTodo, history }) {
  return (
    <section className="todo-list ">
      <ul>
        {todos.map((todo) => (
          <li
            onClick={(ev) => {
              ev.stopPropagation()
              onToggleTodo(ev, todo._id)
            }}
            key={todo._id}
          >
            <TodoPreview todo={todo} onRemoveTodo={onRemoveTodo} />
          </li>
        ))}
      </ul>
    </section>
  )
}
