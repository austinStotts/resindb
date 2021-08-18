import React, { Component } from 'react';

import Signup from './signup';
import Login from './login';
import Resin from './resin';

class App extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div className="app-wrapper">
        <p>hello world</p>
        <Resin/>
      </div>
    )
  }
}

export default App;