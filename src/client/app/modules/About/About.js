import React from 'react';
import { Image } from 'react-bootstrap';
import styles from './About.css';
import profile from './profile.jpg';

export default React.createClass({
  render() {
    return (
      <div>
        <h1>About Me</h1>
        <Image responsive src={profile}/>
        <h3>A Little Bit About Me!</h3>
          <div>I am a young professional living in the city of Chicago.  I received a bachelor of science in Applied Engineering Sciences from Michigan State University.  I have been working in Supply Chain Management for the past 5 years but am now looking to transition into a career in Front-End Development.  When I'm not writing code or learning about new web tech, you can find me hiking, playing disc golf, or pc gaming with friends.</div>
        <h3>Why Web Development?</h3>
          <div>In highschool and college I had classes on C++, Java, and Matlab.  I enjoyed learning the languages, learning common design patterns, and using my technical problem solving skills.  In college I decided to go with a more generalized engineering degree and ended up working in Supply Chain Management after school.  I wasn't feeling completely satisfied working in SCM as the challenges I faced were not very technical or complex in nature and oftern revolved around manufacturing constraints or working with bad sales forecasting.  In speaking with a friend of mine about wanting to pursue a different carrer path (possibly going back to school to pursue a computer science degree), he suggested I give javascript a try and see how I liked web development.  After reading up on the language and completing a few tutorials I was hooked.  A year later I'm now writing code or reading about new web technologies on a daily basis.  I will find  myself on MDN or writing out pseudocode to solve a problem that's been bugging me at random times throughout the day.  I love the open source nature of web technology, the countless free resources and forums for learning an solving problems online, and the constant flow of new technology being released that is furthering what web developers a capable of doing.</div>
        <h3>Opportunities I Am Looking For...</h3>
          <div>Now that I have been studying web development for over a year, I feel confident in my skills and have started pursuing a junior/entry-level Front-End Development opportunites.  My ideal position would be a front-end developer role within a large team of developers at a tech company.  I want to be in a position where I can be a highly effective and contributing member of the team while also learning from my teammates and "leveling-up" my development skills.  If you have a position available or would like to contact me about work, please see my contact page!</div>
      </div>
    );
  }
});
