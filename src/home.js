import React, { Component } from 'react';
import Ideas from './ideas';
import AddIdea from './addIdea.js';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hackathon Project Ideas</h1>
        <Ideas />
        <AddIdea />
      </div>
    );
  }
}

export default Home;
