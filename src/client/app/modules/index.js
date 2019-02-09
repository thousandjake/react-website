import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App/App'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'

/*render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={About}/>
      <Route path="/skills" component={Skills}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/contact" component={Contact}/>
    </Route>
  </Router>
), document.getElementById('app'))*/

render((
  <div>
    <div>Jake Thousand</div>
    <div>Software Developr</div>
    <div>
      <a href="https://github.com/thousandjake">My Github</a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/jacob-thousand-a3a8a191">My Linkedin</a>
    </div>
  </div>
), document.getElementById('app'))
