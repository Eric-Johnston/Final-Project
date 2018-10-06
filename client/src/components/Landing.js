import React from 'react';
import './Landing.css';

const Landing = props => (
  <div className="landing column y-center x-center">
      <div className="hero column y-center">
        <h1>MoviezTVsource</h1>
        <button onClick={props.showForm}>Login Now To Get Started!</button>
      </div>
  </div>
);

export default Landing;