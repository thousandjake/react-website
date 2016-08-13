import React from 'react';
import { IndexLink, Link } from 'react-router';
import styles from './App.css';

export default React.createClass({
  render() {
    return (
      <div>
        <div className='header'>
          <h1 className='title'>JAKE THOUSAND <small>Front-End Dev</small></h1>
          <ul className='nav'>
            <li>
              <IndexLink to={{ pathname: '/', activeClassName: 'active' }}>About</IndexLink>
            </li>
            <li>
              <Link to={{ pathname: '/skills', activeClassName: 'active' }}>Skills</Link>
            </li>
            <li>
              <Link to={{ pathname: '/projects', activeClassName: 'active' }}>Projects</Link>
            </li>
            <li>
              <Link to={{ pathname: '/contact', activeClassName: 'active' }}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className='wrapper'>
        {this.props.children}
        </div>
        <div className='footer'>
        </div>
      </div>
    );
  }
});
