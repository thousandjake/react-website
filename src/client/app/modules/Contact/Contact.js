import React from 'react';
import $ from 'jquery';
import ContactForm from './ContactForm'

export default React.createClass({
  handleContactFormSubmit: function (contactData) {
    var submitStatus = document.getElementById('submitStatus');
    submitStatus.innerHTML = '';
    $.ajax({
      url: '/contactMessage',
      dataType: 'json',
      type: 'POST',
      data: contactData,
      success: function(success) {
        console.log(success);
        submitStatus.setAttribute('status','success');
        submitStatus.innerHTML = 'Form Successfully Submitted!';
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
        submitStatus.setAttribute('status','error');
        submitStatus.innerHTML = 'Sumission Error: ' + err.toString();
      }.bind(this)
    });
  },
  render() {
    return (
      <div>
        <h2>Contact Me!</h2>
        <div className="container">
          <div>
            <p>I am currently pursuing a junior/entry-level Front-End Development opportunites!  Please feel free to send me a quick email via the contact form or reach out to me on social media regarding employement opportunities, cool open-source projects, or general questions about my work.</p>
            <a href="https://github.com/thousandjake">My Github</a>
            <span> - </span>
            <a href="https://www.linkedin.com/in/jacob-thousand-a3a8a191">My Linkedin</a>
          </div>
          <div className='form'>
            <ContactForm onContactFormSubmit={this.handleContactFormSubmit}/>
          </div>
      </div>
      </div>
    );
  }
});
