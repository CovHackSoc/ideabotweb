import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

const url = 'https://us-central1-hackathonideas-6e61d.cloudfunctions.net/addIdea'

class AddIdea extends Component {
  constructor() {
    super();
    this.state = {
      idea: '',
      author: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  submit(event) {
    axios.post(url, this.state).then(
      (response) => {
        console.log(response);
      }
    ).catch(
      (err) => {
        console.log(err);
      }
    ).then((
      () => {
        this.setState({idea: ''});
      }
    ));
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Add Idea</h2>
        <Form onSubmit={this.submit}>
          <FormGroup>
            <Label for="author">Author</Label>
            <Input
              value={this.state.author}
              onChange={this.handleChange}
              type="text"
              name="author"
              id="author"
              placeholder="Author"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Idea">Idea</Label>
            <Input
              value={this.state.idea}
              onChange={this.handleChange}
              type="textarea"
              name="text"
              id="idea"
              placeholder="Your Idea Here...."
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default AddIdea;
