import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import './style.css'
import Home from './views/Home/home'
import Shop from './views/Shop/Shop'
import About from './views/About/About'
import FAQ from './views/FAQ/FAQ'
import Contact from './views/Contact/Contact'
import Login from './views/Login/Login'
import Register from './views/Register/Register'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Shop} exact path="/shop" />
        <Route component={About} exact path="/about" />
        <Route component={FAQ} exact path="/faq" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Login} exact path="/login" />
        <Route component={Register} exact path="/register" />

      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
