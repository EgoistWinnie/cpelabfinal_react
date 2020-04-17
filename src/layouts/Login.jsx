import React, { Component } from "react";
import { Grid, Row, Col, Form, Button } from "react-bootstrap";

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
        bearer_token: "",
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

    validateForm() {
        return email.length > 0 && password.length > 0;
    }

    fetchLogin(login){
        fetch('http://localhost:5000/api/v3/users/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        })
            .then(response => response.json())
            .then(data =>
                localStorage.setItem('token',data.token)
            )
            .catch(error => this.setState({ error }));
    }

    onChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
  
    onSubmit = e => {
        e.preventDefault();
        const { email, password} = this.state;
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
              <Grid>
                  <Form onSubmit={handleSubmit}>
                      <FormGroup controlId="email" bsSize="large">
                          <ControlLabel>Email</ControlLabel>
                          <FormControl
                              autoFocus
                              type="email"
                              value={email}
                              onChange={e => setEmail(e.target.value)}
                          />
                      </FormGroup>
                      <FormGroup controlId="password" bsSize="large">
                          <ControlLabel>Password</ControlLabel>
                          <FormControl
                              value={password}
                              onChange={e => setPassword(e.target.value)}
                              type="password"
                          />
                      </FormGroup>
                      <Button block bsSize="large" disabled={!validateForm()} type="submit">
                          Login
                      </Button>
                  </Form>
              </ Grid>
        </div>
      );
    }
  }
  
  export default Login;
  