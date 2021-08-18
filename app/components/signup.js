import React, { Component } from 'react';

const Signup = () => {

  return (
    <div className="signup-container">
      <div className="signup-username-container">
        <input className="signup-username" type="text" placeholder="username"></input>
      </div>
      <div className="signup-password">
        <input className="signup-password" type="text" placeholder="password"></input>
      </div>
      <div className="signup-button-container">
        <button className="signup-button">signup</button>
      </div>
    </div>
  )
}

export default Signup;