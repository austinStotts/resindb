import React, { Component } from 'react';



class Login extends Component {
  constructor (props) {
    super(props);

    this.state = {}

    this.print = this.print.bind(this);
  }

  print () {
    console.log(this.state.username, this.state.password);
    // console.log(this.state.username);
  }

  render () {
    return (
      <div className="login-container">
        <div className="login-username-container">
          <input 
          className="login-username" 
          type="text" 
          placeholder="username" 
          onChange={(event) => {this.setState({username: event.target.value})}}
          ></input>
        </div>
        <div className="login-password">
          <input 
          className="login-password" 
          type="text" 
          placeholder="password"
          onChange={(event) => {this.setState({password: event.target.value})}}
          ></input>
        </div>
        <div className="login-button-container">
          <button className="login-button" onClick={() => {this.print()}}>login</button>
        </div>
      </div>
    )
  }
}

export default Login;