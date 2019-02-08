import React, { Component } from 'react';
import Ideas from './ideas';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hackathon Project Ideas</h1>
        <Ideas />
      </div>
    );
  }
}

export default Home;
