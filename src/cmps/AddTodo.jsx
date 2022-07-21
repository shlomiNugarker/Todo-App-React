import { Component, createRef } from 'react'

export class AddTodo extends Component {
  state = {
    txt: '',
  }

  handleChange = async ({ target }) => {
    const field = target.name
    const value = target.type === 'number' ? +target.value || '' : target.value
    this.setState((prevState) => ({ [field]: value }))
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.addTodo()
    }
  }

  addTodo = (ev) => {
    ev.preventDefault()
    if (!this.state.txt) return
    this.props.onSaveTodo(this.state.txt)
    this.setState({ txt: '' })
  }

  render() {
    console.log('render AddTodo')
    return (
      <section className="add-todo">
        <div className="add">
          <input
            placeholder="Add.."
            type="text"
            name="txt"
            value={this.state.txt}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
          <br />
          <button onClick={(ev) => this.addTodo(ev)}>Add Todo</button>
        </div>
      </section>
    )
  }
}
