import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import View from './view';
import Home from './home';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={View} />
      </div>
    );
  }
}

export default App;
