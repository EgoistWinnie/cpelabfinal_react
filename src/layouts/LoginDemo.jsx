import React, { Component } from "react";
import { Grid, Row, Col, Form, Button } from "react-bootstrap";

import { FormInputs } from "components/FormInputs/FormInputs.jsx";

import Card from "components/Card/Card.jsx";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      cpass: "",
      isSignup: false,
      isLoaded: false,
      error: null
    };
  }

  // handleAuthState = authState => {
  //   if (this.state.isLogin === true) {
  //     this.props.history.push('/login');
  //   } else {
  //     this.props.history.push('/signup');
  //   }
  // };

  // changeAuthState = authState => event => {
  //   event.preventDefault();

  //   this.props.onChangeAuthState(authState);
  // };

  renderButtonText() {
    const { buttonText } = this.props;

    if (this.state.isSignup === false) {
      return 'Login';
    }

    if (this.state.isSignup === true) {
      return 'Signup';
    }

    return buttonText;
  }

  fetchLogin(login) {
    fetch('http://localhost:5000/api/v3/users/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(login)
    })
      .then(response => response.json())
      .then(data =>
        localStorage.setItem('token', data.token)
      )
      .catch(error => this.setState({ error }));
  }

  onChangeEmail = e => {
    const { value } = e.target
    this.setState({
      email: value
    })
  }

  onChangePass = e => {
    const { value } = e.target
    this.setState({
      password: value
    })
  }

  onChangeConfirmPass = e => {
    const { value } = e.target
    this.setState({
      cpass: value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const login = {
      "email": email,
      "password": password
    }
    this.fetchLogin(login);
  };

//   fetchData() {
//     fetch('http://theapi/api/auth', {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json',
//         },
//          body: JSON.stringify({
//             username: 'myUserName',
//             password: 'myPassword',
//             Authorization: 'TheReturnedToken',
//         })
//     }) /*end fetch */
//     .then(results => results.json())
//     .then(data => this.setState({ data: data }))
//     }
//   componentDidMount(){
//     this.fetchAllEvents();
//   }
  render() {
    // const event = this.state.item;
    // const eventcount = Object.keys(event).length;
    return (
      <div>
        <Grid fluid>
          <Row className="justify-content-center" >
            <Col md={6} lg={4}>
              <Card 
                content={
                  <div>
                    <Form onSubmit={this.onSubmit}>
                      <FormInputs
                        ncols={["col-md-12"]}
                        properties={[
                          {
                            label: "Username",
                            type: "text",
                            bsClass: "form-control",
                            placeholder: "Username",
                          }
                        ]}
                        onChange={this.onChangeEmail}
                      />
                      <FormInputs
                        ncols={["col-md-12"]}
                        properties={[
                          {
                            label: "Password",
                            type: "password",
                            bsClass: "form-control",
                            placeholder: "New event"
                          }
                        ]}
                        onChange={this.onChangePass}
                      />
                      <hr />
                      <Button
                        size="lg"
                        className="bg-gradient-theme-left border-0"
                        block
                        onClick={this.onSubmit}>
                        {this.renderButtonText()}
                      </Button>

                      {/* <div className="text-center pt-1">
                        <h6>or</h6>
                        <h6>
                          {this.state.isSignup ? (
                            <a href="/login" onClick={this.state.isSignup = false}>
                              Login
                            </a>
                          ) : (
                              <a href="/signup" onClick={this.state.isSignup = true}>
                                Signup
                              </a>
                            )}
                        </h6>
                      </div> */}
                    </Form>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Login;
