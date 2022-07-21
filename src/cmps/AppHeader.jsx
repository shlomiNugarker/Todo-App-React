import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export function AppHeader(props) {
  return (
    <header className="app-header">
      <section className="container">
        <h3 className="logo">My Todos</h3>

        <nav>
          <NavLink activeClassName="my-active" exact to="/">
            Home
          </NavLink>
          <NavLink activeClassName="my-active" to="/todo">
            Todos
          </NavLink>
          <NavLink activeClassName="my-active" to="/about">
            About
          </NavLink>
        </nav>
      </section>
    </header>
  )
}
