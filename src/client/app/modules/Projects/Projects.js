import React from 'react';
import  projectOne from './projectone.jpg';
import  projectTwo from './projecttwo.jpg';
import projectThree from './projectthree.jpg';

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Some of My Past Projects!</h2>
        <div>
          <p>I've created a couple projects and refactored them over time to build and hone my skills in HTML, CSS, and Javascript.  A few of my projects are shown below and you are also using one of them now.  This website was built from scratch using React and Webpack!  If you'd like to see any of my other code, please visit my github or contact me using the contact form on my contact page.  </p>
          <p>
            <a href="https://github.com/thousandjake">
              <strong>My Github</strong>
            </a>
          </p>
        <div>
          <h4>Project 1 - World of Warcraft Quiz</h4>
          <p>This was one of the first projects I worked on.  It is a 20 question quiz based on the game world of warcraft.  The quiz was originally done with JQUERY and gave a score at the end.  All of the questions were stored in a JSON filed and retrieved with an AJAX call when the app loaded.  While learning the basics of AngularJS I refactored the quiz and added two way binding to update the user's score after each question was answered or updated.</p>
          <p>
            <a href="https://github.com/thousandjake/js-wow-quiz">
              <strong>Project Github Page</strong>
            </a>
          </p>
          <ul className='skills'>
            <li>Javascript</li>
            <li>AngularJS</li>
            <li>AJAX</li>
            <li>Node.js</li>
            <li>JSON</li>
          </ul>
          <img className='projectTwo' src={projectTwo} alt='World of Warcraft Quiz'/>
        </div>
        <h4>Project 2 - Hearthstone Deckbuilder App</h4>
        <p>The goal of this project was to create an application that would allow the user to search the library of cards from the popular game Hearthstone.  The user could then select a class and cards to build a 30 card deck.  The card data in the application is received from an AJAX call to a Hearthstone API (website below).  The app was originally written in plain javascript using a subscribe / dispatch pattern to trigger callbacks when an event was dispatched.  I refactored the code using AngularJS while learning Angular.</p>
        <p>
          <a href="https://github.com/thousandjake/hearthstone-project">
            <strong>Project Github Page</strong>
          </a>
        </p>
        <p>
          <a href="http://hearthstoneapi.com/">
            <strong>HearthstoneAPI</strong>
          </a>
        </p>
        <ul className='skills'>
          <li>Javascript</li>
          <li>AngularJS</li>
          <li>AJAX</li>
          <li>WebAPI</li>
        </ul>
        <img className='projectOne' src={projectOne} alt='Hearthstone Deckbuilder Project'/>
      </div>
        <div>
          <h4>Project 3 - Project Euler Problems</h4>
          <p>Euler Problems are not so much a project as they are a fun way to solve complex math equations using coding.  I've been working through the problems online to test my javascript skills as well as a way to learn the basics of test-driven development.  I approach each problem first writing tests in Jasmine / Karma to describe the solution.  I then work through coding a solution to the problem that passes the tests.  You can see my code for the problems via the Github link below.</p>
          <p>
            <a href="https://github.com/thousandjake/euler-project-problems">
              <strong>Project Github Page</strong>
            </a>
          </p>
          <p>
            <a href="https://projecteuler.net/">
              <strong>Project Euler</strong>
            </a>
          </p>
          <ul className='skills'>
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
