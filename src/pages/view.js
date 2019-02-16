import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedRelative } from 'react-intl';
import firebase from '../firebase';

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idea: {},
      id: props.match.params.id,
    }

    this.onChange = this.onChange.bind(this);
    this.onDelete = this.onDelete.bind(this);

    const database = firebase.database();
    const ideasRef = database.ref('ideas').child('all').child(this.state.id);

    ideasRef.on('child_added', this.onChange);
    ideasRef.on('child_changed', this.onChange);
    ideasRef.on('child_removed', this.onDelete);
  }

  onChange(e) {
    const idea = this.state.idea;
    idea[e.key] = e.val();
    this.setState({ idea: idea });
  }

  onDelete(e) {

  }

  render() {
    return (
      <div>
        <Link to='/'>Back</Link>
        <h1>Author: {this.state.idea.author || 'anonymous'}</h1>
        <h1>Idea: {this.state.idea.idea || 'N/A'}</h1>
        <h1>Score: {this.state.idea.score || 0}</h1>
            <h1>Date: <FormattedRelative value={this.state.idea.date || 0} /></h1>
      </div>
    );
  }
};

export default View;
