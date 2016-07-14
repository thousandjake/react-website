import React from 'react';
import { PageHeader, Nav, NavItem } from 'react-bootstrap';
import { IndexLink, Link } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

export default React.createClass({
  render() {
    return (
      <div>
        <PageHeader>JAKE THOUSAND<small>   Front-End Developer</small></PageHeader>
        <Nav bsStyle="tabs">
          <IndexLinkContainer to={{ pathname: '/', activeClassName: 'active' }} >
            <NavItem>About Me</NavItem>
          </IndexLinkContainer>
          <LinkContainer to={{ pathname: '/skills', activeClassName: 'active' }} >
            <NavItem>Skills</NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: '/projects', activeClassName: 'active' }} >
            <NavItem>Projects</NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: '/contact', activeClassName: 'active' }} >
            <NavItem>Contact</NavItem>
          </LinkContainer>
        </Nav>
        {this.props.children}
      </div>
    );
  }
});
