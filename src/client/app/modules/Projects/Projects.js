import React from 'react';
import { Label, Image } from 'react-bootstrap';
import  projectOne from './projectone.jpg';
import  projectTwo from './projecttwo.jpg';
import projectThree from './projectthree.jpg';

export default React.createClass({
  render() {
    return (
      <div>
        <div className='section'>
          <h3>Some of My Past Projects!</h3>
          <h4>Project 1 - Hearthstone Deckbuilder App</h4>
          <p>Search and Pick Cards from the API to build a deck</p>
          <ul className='skills'>
            <li>Javascript</li>
            <li>AngularJS</li>
            <li>AJAX</li>
            <li>WebAPI</li>
          </ul>
          <img className='projectOne' src={projectOne} alt='Hearthstone Deckbuilder Project'/>
        </div>
        <div className='section'>
          <h4>Project 2 - Wow Quiz</h4>
          <p>You are not prepared!!!!</p>
          <ul>
            <li>Javascript</li>
            <li>AngularJS</li>
            <li>AJAX</li>
            <li>Node.js</li>
            <li>JSON</li>
          </ul>
          <img className='projectTwo' src={projectTwo} alt='World of Warcraft Quiz'/>
        </div>
        <div className='section'>
          <h4>Project 3 - Euler Problems</h4>
          <p>tricky problems for only the trillest coders</p>
          <ul>
            <li>Javascript</li>
            <li>Looping</li>
            <li>Array Manipulation</li>
            <li>Recursion</li>
          </ul>
          <img className='projectThree' src={projectThree} alt='Project Euler Code'/>
        </div>
      </div>
      );
  }
});
