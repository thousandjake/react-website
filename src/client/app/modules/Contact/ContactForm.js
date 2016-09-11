import React from 'react';

export default React.createClass({
  getInitialState: function () {
    return {person: '', company: '', email: '', message: ''};
  },
  handlePersonChange: function (e) {
    this.setState({person: e.target.value});
  },
  handleCompanyChange: function (e) {
    this.setState({company: e.target.value});
  },
  handleEmailChange: function (e) {
    this.setState({email:e.target.value})
  },
  handleMessageChange: function (e) {
    this.setState({message:e.target.value})
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var person = this.state.person.trim();
    var company = this.state.company.trim();
    var email = this.state.email.trim();
    var message = this.state.message.trim();

    if (!person || !company || !email || !message) {
      return;
    }
    this.props.onContactFormSubmit({
      person: person,
      company: company,
      email: email,
      message: message
    });
    this.setState({person: '', company: '', email: '', message: ''});
  },
  render: function() {
    return (
      <form className="contactForm" onSubmit={this.handleSubmit}>
        <input
          required
          type="text"
          placeholder="Your name"
          value={this.setState.person}
          required size="40"
          onChange={this.handlePersonChange}
        />
        <input
          required
          type="text"
          placeholder="Your Company"
          value={this.setState.company}
          required size="40"
          onChange={this.handleCompanyChange}
        />
        <input
          required
          type="email"
          placeholder="Your Email"
          value={this.setState.email}
          required size="40"
          onChange={this.handleEmailChange}
        />
      <textarea
          required
          name="message"
          placeholder="Your Message"
          value={this.setState.company}
          required cols="40"
          rows="10"
          onChange={this.handleMessageChange}
        />
      <input type="submit" value="Submit" />
      </form>
    );
  }
});
