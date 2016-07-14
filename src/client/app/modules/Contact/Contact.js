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
        <h1>Call Me Maybe!</h1>
        <ContactForm onContactFormSubmit={this.handleContactFormSubmit}/>
      </div>
    );
  }
});
