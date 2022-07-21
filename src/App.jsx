import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader'
import './assets/scss/global.scss'
import { TodoApp } from './pages/TodoApp'
import { Home } from './pages/Home'
import { About } from './pages/About'

function App() {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Switch>
            <Route path="/todo" component={TodoApp}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
