import React from 'react';
import { Label, Image } from 'react-bootstrap';
import  projectOne from './projectone.jpg';
import  projectTwo from './projecttwo.jpg';
import  projectThree from './projectthree.jpg';

export default React.createClass({
  render() {
    return (
      <div>
        <h3>Some of My Past Projects</h3>
        <h4>Project 1 - Hearthstone Deckbuilder App</h4>
        <div>Search and Pick Cards from the API to build a deck</div>
        <Image responsive src={projectOne}/>
        <div>
          <Label>Javascript</Label>
          <Label>AngularJS</Label>
          <Label>AJAX</Label>
          <Label>WebAPI</Label>
        </div>
        <h4>Project 2 - Wow Quiz</h4>
        <div>You are not prepared!!!!</div>
        <Image responsive src={projectTwo}/>
        <div>
          <Label>Javascript</Label>
          <Label>AngularJS</Label>
          <Label>AJAX</Label>
          <Label>Node.js</Label>
          <Label>JSON</Label>
        </div>
        <h4>Project 3 - Euler Problems</h4>
        <div>tricky problems for only the trillest coders</div>
        <Image responsive src={projectThree}/>
        <div>
          <Label>Javascript</Label>
          <Label>Looping</Label>
          <Label>Array Manipulation</Label>
          <Label>Recursion</Label>
        </div>
      </div>
      );
  }
});
