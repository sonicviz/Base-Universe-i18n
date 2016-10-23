import React from 'react';
import { Link } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { handleLogin } from '../../modules/login';

import i18n from 'meteor/universe:i18n';

//instance of translate component with top-level context
const T = i18n.createComponent();

export class Login extends React.Component {
  componentDidMount() {
    handleLogin({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return <Row>
      <Col xs={ 12 } sm={ 6 } md={ 4 }>
        <h4 className="page-header"><T>common.loginform.Login</T></h4>
        <form ref="login" className="login" onSubmit={ this.handleSubmit }>
          <FormGroup>
            <ControlLabel><T>common.loginform.Email</T></ControlLabel>
            <FormControl
              type="email"
              ref="emailAddress"
              name="emailAddress"
              placeholder="Email Address"
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>
              <span className="pull-left"><T>common.loginform.Password</T></span>
              <Link className="pull-right" to="/recover-password"><T>common.loginform.ForgotPassword</T></Link>
            </ControlLabel>
            <FormControl
              type="password"
              ref="password"
              name="password"
              placeholder="Password"
            />
          </FormGroup>
          <Button type="submit" bsStyle="success"><T>common.loginform.Login</T></Button>
        </form>
      </Col>

    </Row>;
  }
}
