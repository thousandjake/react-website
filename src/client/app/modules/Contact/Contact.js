import React from 'react';
import $ from 'jquery';
import ContactForm from './ContactForm'

export default React.createClass({
  handleContactFormSubmit: function (contactData) {
    console.log(contactData);
    $.ajax({
      url: '/contactMessage',
      dataType: 'json',
      type: 'POST',
      data: contactData,
      success: function(data) {
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render() {
    return (
      <div>
        <h3>Call Me Maybe!</h3>
        <div className='form'>
          <ContactForm onContactFormSubmit={this.handleContactFormSubmit}/>
        </div>
      </div>
    );
  }
});
