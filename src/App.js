import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import View from './pages/view';
import Home from './pages/home';
import Add from './pages/add';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Hackathon Project Ideas</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/add">Add Idea</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={Add} />
        <Route path="/idea/:id" component={View} />
      </div>
    );
  }
}

export default App;
