import React, { Component } from 'react';
import Moment from 'moment';

import { database } from '../../firebase';
import moment from 'moment';

export default class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      blog_status: '',
      timeStamp: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(
    //   this
    // );
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      blog_status: this.state.blog_status,
      body: this.state.body,
      timeStamp: moment().unix(),
      date: moment().format('LLL'),
    };
    console.log(post);
    database.push(post);
    this.props.handleSuccessfulFormSubmission(post);
    this.setState({
      title: '',
      blog_status: '',
      body: '',
      timeStamp: '',
      date: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Blog Title'
          name='title'
          value={this.state.title}
          onChange={this.handleChange}
        ></input>
        <input
          type='text'
          onChange={this.handleChange}
          name='body'
          placeholder='Body'
          value={this.state.body}
        ></input>
        <input
          type='text'
          onChange={this.handleChange}
          name='blog_status'
          placeholder='Blog Status'
          value={this.state.blog_status}
        ></input>
        <button>Submit!</button>
      </form>
    );
  }
}
