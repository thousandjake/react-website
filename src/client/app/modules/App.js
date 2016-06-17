import React from 'react';
import { IndexLink, Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        <h1>JAKE THOUSAND</h1>
        <ul role="nav">
          <li><IndexLink to="/" activeClassName="active">About</IndexLink></li>
          <li><Link to="/skills" activeClassName="active">Skills</Link></li>
          <li><Link to="/projects" activeClassName="active">Projects</Link></li>
          <li><Link to="/contact" activeClassName="active">Contact</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});
