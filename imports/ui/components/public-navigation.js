import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { MenuItem, Nav, NavDropdown, NavItem } from 'react-bootstrap';

import i18n from 'meteor/universe:i18n';

//instance of translate component with top-level context
const T = i18n.createComponent();

export const PublicNavigation = React.createClass({

  handleSelect(eventKey) {
    event.preventDefault();
    switch (eventKey) {
      case 5.1:
        i18n.setLocale('en-US');
        //alert(`selected ${eventKey}`);
        break;
      case 5.2:
        i18n.setLocale('ja-JP');
        //alert(`selected ${eventKey}`);
        break;
      case 5.3:
        i18n.setLocale('de-DE');
        //alert(`selected ${eventKey}`);
        break;
      default:
        i18n.setLocale('en-US');
        break;
    }
  },


  render() {
    return (
      <div>
        <Nav pullRight>
          <NavDropdown eventKey={5} title={<T>common.navbar.Language</T>} id="nav-dropdown" onSelect={this.handleSelect}>
            <MenuItem eventKey={5.1}><T>common.navbar.enUS</T></MenuItem>
            <MenuItem eventKey={5.2} ><T>common.navbar.jaJP</T></MenuItem>
            <MenuItem eventKey={5.3} ><T>common.navbar.deDE</T></MenuItem>
          </NavDropdown>
          <LinkContainer to="signup">
            <NavItem eventKey={3} href="/signup"><T>common.navbar.Signup</T></NavItem>
          </LinkContainer>
          <LinkContainer to="login">
            <NavItem eventKey={4} href="/login"><T>common.navbar.Login</T></NavItem>
          </LinkContainer>
        </Nav>
      </div>
    );
  }
});