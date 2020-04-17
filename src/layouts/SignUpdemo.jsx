import React, { Component } from "react";
//import 'bulma/css/bulma.css'

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
        <section className="section container">
               <div className="columns is-centered">
                   <div className="column is-half">
                       <form onSubmit={this.onSubmit}>
                           <div className="field">
                               <label className="label">Email</label>
                               <div className="control">
                                   <input className="input" type="email" name="email" onChange={this.onChange} />
                               </div>
                           </div>
                           <div className="field">
                               <label className="label">
                                   password
                               </label>
                               <div className="control">
                                   <input className="input" type="password" name="password" onChange={this.onChange}/>
                               </div>
                           </div>
                           <div className="field is-grouped">
                               <div className="control">
                                   <button className="button is-link">Login</button>
                               </div>
                           </div>
                       </form>
                       <div className="text-center pt-1">
                        <h6>or</h6>
                        <h6>
                              <a href="#signup" onClick={this.state.isLogin = false}>
                                Signup
                              </a>
                        </h6>
                      </div>
                   </div>
               </div>
           </section>
      );
    }
  }
  
  export default Login;
  