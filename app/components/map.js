import React, { Component } from 'react';

const artifacts = ['Domain of Guyun', 'Midsummer Courtyard', 'Valley of Remembrance', 'Hidden Palace of Zhou Formula', 'Peak of Vindagnyr', 'Ridge Watch', 'Momiji-Dyed Court', 'Clear Pool and Mountain Cavern'];
const worldBosses = [];
const weeklyBosses = [];
const leyLines = [];

const Map = (props) => {
  console.log(`${props.view}`);
  return (props.view.map((name) => {
    return (
    <div className="view-button-container">
      <div className="view-button item">{name}</div>
    </div>);
  }))
}

export default Map;