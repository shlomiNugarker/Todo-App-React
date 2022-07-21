import { todoService } from '../../services/todoService'

export function loadTodos() {
  return async (dispatch, getState) => {
    try {
      const { filterBy } = getState().todosModule
      const todos = await todoService.query(filterBy)
      dispatch({ type: 'SET_TODOS', todos })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function removeTodo(todoId) {
  return async (dispatch) => {
    try {
      await todoService.remove(todoId)
      dispatch({ type: 'REMOVE_TODO', todoId })
    } catch (err) {
      console.log('err:', err)
    }
  }
}
export function saveTodo(txt) {
  console.log('save todo')
  return async (dispatch) => {
    try {
      const todo = todoService.getEmptyTodo()
      todo.txt = txt
      await todoService.save(todo)
      dispatch({ type: 'ADD_TODO', todo })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function toggleTodo(todoId) {
  return async (dispatch) => {
    try {
      let todo = await todoService.getById(todoId)
      todo.isDone = !todo.isDone
      await todoService.save(todo)
      dispatch({ type: 'UPDATE_TODO', todo })
    } catch (err) {
      console.log('err', err)
    }
  }
}

export function setFilterBy(filterBy) {
  return async (dispatch) => {
    dispatch({ type: 'SET_FILTER_BY', filterBy })
  }
}
