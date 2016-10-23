import React from 'react';
import { Link } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { handleSignup } from '../../modules/signup';

import i18n from 'meteor/universe:i18n';

//instance of translate component with top-level context
const T = i18n.createComponent();

export class Signup extends React.Component {
  componentDidMount() {
    handleSignup({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return <Row>
      <Col xs={ 12 } sm={ 6 } md={ 4 }>
        <h4 className="page-header"><T>common.signupform.Signup</T></h4>
        <form ref="signup" className="signup" onSubmit={ this.handleSubmit }>
          <Row>
            <Col xs={ 6 } sm={ 6 }>
              <FormGroup>
                <ControlLabel><T>common.signupform.Firstname</T></ControlLabel>
                <FormControl
                  type="text"
                  ref="firstName"
                  name="firstName"
                  placeholder="First Name"
                />
              </FormGroup>
            </Col>
            <Col xs={ 6 } sm={ 6 }>
              <FormGroup>
                <ControlLabel><T>common.signupform.Lastname</T></ControlLabel>
                <FormControl
                  type="text"
                  ref="lastName"
                  name="lastName"
                  placeholder="Last Name"
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <ControlLabel><T>common.signupform.Email</T></ControlLabel>
            <FormControl
              type="text"
              ref="emailAddress"
              name="emailAddress"
              placeholder="Email Address"
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel><T>common.signupform.Password</T></ControlLabel>
            <FormControl
              type="password"
              ref="password"
              name="password"
              placeholder="Password"
            />
          </FormGroup>
          <Button type="submit" bsStyle="success"><T>common.signupform.Signup</T></Button>
        </form>
        <p>Already have an account? <Link to="/login"><T>common.loginform.Login</T></Link>.</p>
      </Col>
    </Row>;
  }
}
