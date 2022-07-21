import { Component } from 'react'

export class TodoFilter extends Component {
  state = {
    txt: '',
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === 'number' ? +target.value || '' : target.value
    this.setState({ [field]: value }, () => {
      this.props.onChangeFilter(this.state)
    })
  }

  render() {
    const { txt } = this.state
    return (
      <section className="todo-filter">
        <section>
          <input
            type="text"
            onChange={this.handleChange}
            id="txt"
            name="txt"
            value={txt}
            placeholder="Search"
          />
        </section>
      </section>
    )
  }
}
