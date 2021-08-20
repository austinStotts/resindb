import React, { Component } from 'react';


const artifacts = ['Domain of Guyun', 'Midsummer Courtyard', 'Valley of Remembrance', 'Hidden Palace of Zhou Formula', 'Peak of Vindagnyr', 'Ridge Watch', 'Momiji-Dyed Court', 'Clear Pool and Mountain Cavern'];
const worldBosses = [];
const weeklyBosses = [];
const leyLines = [];

const Map = (props) => {
  console.log(`${props.domains[0].artifacts[0].name}`);
  return (props.domains.map((domain) => {
    return (
    <div className="view-button-container item">
      <div className="view-button ">{domain.name}</div>
      <img src={`./flower/${domain.artifacts[0].flowerImage}`}></img>
      <img src={`./flower/${domain.artifacts[1].flowerImage}`}></img>
    </div>);
  }))
}

export default Map;

