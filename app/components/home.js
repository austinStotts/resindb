import react, { Component } from 'react';
import Resin from './resin';

class Home extends Componet {
  constructor (props) {
    super(props);

    this.state = {};
  }

  render () {
    return (
      <div className="home-container">
        <button className="add-button">add</button>
      </div>
    )
  }
}

export default Home;