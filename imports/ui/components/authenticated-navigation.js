import React from 'react';
import { browserHistory } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

import i18n from 'meteor/universe:i18n';

//instance of translate component with top-level context
const T = i18n.createComponent();

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};

export const AuthenticatedNavigation = React.createClass({

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
        <Nav pullLeft>
          <IndexLinkContainer to="/">
            <NavItem eventKey={1} href="/"><T>common.navbar.Index</T></NavItem>
          </IndexLinkContainer>
          <LinkContainer to="documents">
            <NavItem eventKey={2} href="/documents"><T>common.navbar.Documents</T></NavItem>
          </LinkContainer>
        </Nav>
        <Nav pullRight>
          <NavDropdown eventKey={5} title={<T>common.navbar.Language</T>} id="nav-dropdown" onSelect={this.handleSelect}>
            <MenuItem eventKey={5.1}><T>common.navbar.enUS</T></MenuItem>
            <MenuItem eventKey={5.2} ><T>common.navbar.jaJP</T></MenuItem>
            <MenuItem eventKey={5.3} ><T>common.navbar.deDE</T></MenuItem>
          </NavDropdown>
          <NavDropdown eventKey={ 3 } title={ userName() } id="basic-nav-dropdown">
            <MenuItem eventKey={ 3.1 } onClick={ handleLogout }><T>common.navbar.Logout</T></MenuItem>
          </NavDropdown>
        </Nav>
      </div>
    );
  }
});