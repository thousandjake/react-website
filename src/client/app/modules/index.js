import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={About}/>
      <Route path="/skills" component={Skills}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/contact" component={Contact}/>
    </Route>
  </Router>
), document.getElementById('app'))
