import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { AddTodo } from '../cmps/AddTodo'
import { TodoFilter } from '../cmps/TodoFilter'
import { TodoList } from '../cmps/TodoList'
import { todoService } from '../services/todoService'
import {
  loadTodos,
  toggleTodo,
  setFilterBy,
  saveTodo,
  removeTodo,
} from '../store/actions/todoActions'

class _TodoApp extends Component {
  state = {
    // txt: '',
  }
  async componentDidMount() {
    await this.props.loadTodos()
  }

  onToggleTodo = (ev, todoId) => {
    this.props.toggleTodo(todoId)
  }

  onChangeFilter = async (filterBy) => {
    await this.props.setFilterBy(filterBy)
    this.props.loadTodos()
  }

  onSaveTodo = async (txt) => {
    console.log(txt)
    await this.props.saveTodo(txt)
  }
  onRemoveTodo = (todoId) => {
    console.log('remove', todoId)
    this.props.removeTodo(todoId)
  }

  render() {
    const { todos } = this.props
    if (!todos) return <div>Loading...</div>
    return (
      <section className="todo-app">
        <div className="container">
          <TodoFilter onChangeFilter={this.onChangeFilter} />
          <TodoList
            todos={todos}
            onToggleTodo={this.onToggleTodo}
            onRemoveTodo={this.onRemoveTodo}
          />
          <AddTodo onSaveTodo={this.onSaveTodo} />
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todosModule.todos,
  }
}

const mapDispatchToProps = {
  loadTodos,
  toggleTodo,
  setFilterBy,
  saveTodo,
  removeTodo,
}

export const TodoApp = connect(mapStateToProps, mapDispatchToProps)(_TodoApp)
