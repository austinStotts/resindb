import React, { Component } from 'react';


import Map from './map';
import domains from './artifact_map';

let artifacts = ['Domain of Guyun', 'Midsummer Courtyard', 'Valley of Remembrance', 'Hidden Palace of Zhou Formula', 'Peak of Vindagnyr', 'Ridge Watch', 'Momiji-Dyed Court', 'Clear Pool and Mountain Cavern'];

class Resin extends Component {
  constructor (props) {
    super(props);

    this.state = {
      view: 'artifacts'
    };
  
  }

  render () {
    return (
      <div className="map-container">
        <Map domains={domains}/>
      </div>
    )
  }
}

export default Resin;