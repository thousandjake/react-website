import React from 'react';
import profile from './profile.jpg';

export default React.createClass({
  render() {
    return (
      <div>
        <h2>About Me!</h2>
        <div className="container">
          <img className='profile' src={profile} alt='Profile Picture'/>
          <div>
            <h4>A Little Bit About Me!</h4>
            <p>I am a young professional living in the city of Chicago.  I received a Bachelor of Science in Applied Engineering Sciences from Michigan State University.  I have been working in Supply Chain Management for the past 5 years but am now looking to transition into a career in Front-End Development.  When I'm not writing code or learning about new web tech, you can find me hiking, playing disc golf, or pc gaming with friends.</p>
          </div>
          <div>
            <h4>Why Web Development?</h4>
            <p>The short version of why I started to get into Web Dev is that I love to learn new things!  I had started to feel like my current position was getting kind of stale as I was performing well but didn't feel that I was growing or very engaged in day to day tasks.  A friend of mine recommended I check out learning a development language and giving some free online courses a try.  After reading up on the language and completing a few tutorials I was hooked.  A year later I'm now writing code or reading about new web technologies on a daily basis.  I will find  myself on MDN or writing out pseudocode to solve a problem that's been bugging me at random times throughout the day.  I love the open source nature of web technology, the countless free resources and forums for learning and solving problems online, and the constant flow of new technology being released that is furthering what web developers are capable of doing.</p>
          </div>
          <div>
            <h4>Opportunities I Am Looking For...</h4>
            <p>Now that I have been studying web development for over a year, I feel confident in my skills and have started pursuing junior/entry-level Front-End Development opportunites.  My ideal position would be a front-end developer role within a large team of developers within the tech industry.  I want to be in a position where I can be a highly effective and contributing member of the team while also learning from my teammates and "leveling-up" my development skills.  If you have a position available or would like to contact me about projects, please see my contact page!</p>
          </div>
        </div>
      </div>
    );
  }
});
