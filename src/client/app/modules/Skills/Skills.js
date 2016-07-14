import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        <h3>Skills</h3>
          <h4>Languages</h4>
            <div><strong>Javascript - </strong><span>Expert Level</span></div>
            <div><strong>HTML - </strong><span>Expert Level</span></div>
            <div><strong>CSS - </strong><span>Expert Level</span></div>
          <h4>Libraries, Frameworks, APIs, etc</h4>
            <div><strong>Node.js+Express - </strong><span>Experienced</span></div>
            <div><strong>JQuery - </strong><span>Experienced</span></div>
            <div><strong>Angular.js - </strong><span>Conquered the Basics, Gaining More Experience</span></div>
            <div><strong>React.js - </strong><span>Conquered the Basics, Gaining More Experience</span></div>
            <div><strong>Karma+Jasmine - </strong><span>Learning the Basics, Writing Unit Tests</span></div>
          <h4>Other Tools I Use</h4>
            <div><strong>Version Control - </strong><span>Git / GitHub</span></div>
            <div><strong>Text Editor - </strong><span>Atom</span></div>
            <div><strong>Help! - </strong><span>MDN, Stack Overflow, Friends</span></div>
        <h3>Education</h3>
          <div><strong>Michigan State University, 2007 - 2011</strong></div>
          <div>Bachelors of Science, Applied Engineering Sciences</div>
        <h3>Professional Experience</h3>
          <h4>Supply Chain Planner, Stepan Company - 2014 to Present</h4>
          <ul>
            <li>Led a cross-functional customer ontime service project which resulted in an improvement from 92% to 97% ontime service to South-Eastern US customers </li>
            <li>Managed production planning and inventory control daily tasks for a catalogue of over 200 products, while also performing long-term demand planning and capacity improvement projects</li>
          </ul>
          <h4>Material Planner / Production Scheduler, Webasto-Edscha Cabrio - 2011 to 2014</h4>
          <ul>
            <li>Forecasted future customer spare parts requirements for 10 year program buy-out. This data, in combination with expendable packaging and dunnage data, was then used to calculate storage space requirements, schedule production, and plan transportation to customer facility</li>
            <li>Learned internal SAP enterprise software system as well as customer online supply chain systems to perform forecasting activities, identify potential capacity issues, and schedule production to meet company inventory goals</li>
          </ul>
      </div>
    );
  }
});
