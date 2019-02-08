import React, { Component } from 'react';
import { Table } from 'reactstrap';
import firebase from './firebase';

class Ideas extends Component {
  constructor() {
    super();
    this.state = {
      ideas: {},
      fragment: window.location.hash || null,
    }

    this.onChange = this.onChange.bind(this);
    this.onDelete = this.onDelete.bind(this);

    /* Setup Firebase */
    const database = firebase.database();
    const ideasRef = database.ref('ideas').child('all');

    ideasRef.on('child_added', this.onChange);
    ideasRef.on('child_changed', this.onChange);
    ideasRef.on('child_removed', this.onDelete);

  }

  onChange(e) {
    const state = this.state;
    state.ideas[e.key] = e.val();
    this.setState(state);
  }

  onDelete(e) {
    const state = this.state;
    delete state.ideas[e.key];
    this.setState(state);
  }

  render() {
    const rawItems = Object.keys(this.state.ideas).map((key) => {
      return {
        id: key,
        key: key,
        author: this.state.ideas[key].author || 'anonymous',
        idea: this.state.ideas[key].idea || '',
      };
    });
    const ListItems = rawItems.map(item => (
      <tr key={item.id}>
        <td>{item.author || 'anonymous' }</td>
        <td>{item.idea || '' }</td>
      </tr>
    ));
    return (
      <Table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Idea</th>
          </tr>
        </thead>
        <tbody>
          {ListItems}
        </tbody>
      </Table>
    );
  }
}
export default Ideas;
