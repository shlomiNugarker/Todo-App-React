import { storageService } from './storageService.js'
import { makeId } from './utilService.js'

export const todoService = {
  query,
  save,
  remove,
  getById,
  getEmptyTodo,
}

const STORAGE_KEY = 'todos'

const gDefaultTodos = [
  {
    _id: 't2',
    txt: 'find a job',
    isDone: true,
    createdAt: new Date().getTime(),
  },
  {
    _id: 't3',
    txt: 'learn react',
    isDone: false,
    createdAt: new Date().getTime(),
  },
  {
    _id: 't1',
    txt: 'to go runing',
    isDone: false,
    createdAt: new Date().getTime(),
  },
  {
    _id: 't4',
    txt: 'learn guitar',
    isDone: false,
    createdAt: new Date().getTime(),
  },
]

var gTodos = _loadTodos()

function query(filterBy) {
  let todosToReturn = gTodos
  if (filterBy) {
    var { txt } = filterBy

    todosToReturn = gTodos.filter((todo) =>
      todo.txt.toLowerCase().includes(txt.toLowerCase())
    )
  }
  return Promise.resolve([...todosToReturn])
}

function getById(id) {
  const todo = gTodos.find((todo) => todo._id === id)
  return Promise.resolve({ ...todo })
}

function remove(id) {
  const idx = gTodos.findIndex((todo) => todo._id === id)
  gTodos.splice(idx, 1)
  console.log(gTodos, 'idx:', idx, 'id:', id)

  if (!gTodos.length) gTodos = gDefaultTodos.slice()
  storageService.store(STORAGE_KEY, gTodos)
  return Promise.resolve()
}

function save(todoToSave) {
  console.log('save(todoToSave')
  if (todoToSave._id) {
    const idx = gTodos.findIndex((todo) => todo._id === todoToSave._id)
    gTodos.splice(idx, 1, todoToSave)
  } else {
    todoToSave._id = makeId()
    gTodos.push(todoToSave)
  }
  storageService.store(STORAGE_KEY, gTodos)
  return Promise.resolve(todoToSave)
}

// function _update(todoToSave) {
//     const idx = gTodos.findIndex(todo => todo._id === todoToSave._id)
//     gTodos.splice(idx, 1, todoToSave)
//     return Promise.resolve(todoToSave)
// }

// function _add(todoToSave) {

// }

function getEmptyTodo() {
  return {
    txt: '',
    isDone: false,
    createdAt: new Date().getTime(),
  }
}

function _loadTodos() {
  let todos = storageService.load(STORAGE_KEY)
  if (!todos || !todos.length) todos = gDefaultTodos
  storageService.store(STORAGE_KEY, todos)
  return todos
}
