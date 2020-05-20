import React, { Component } from 'react';
import ReactModal from 'react-modal';

import BlogForm from '../blog/blog-form';

export default class BlogModal extends Component {
  componentDidMount() {
    ReactModal.setAppElement('#root');
  }

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
    // the reccomended approach for react-modal is to define the styles in-line,
    // so that no other styles override the modal styles
    this.customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
      },
      overlay: {
        backgroundColor: 'rgba(1,1,1,0.75)',
      },
    };

    this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(
      this
    );
  }

  handleSuccessfulFormSubmission(post) {
    this.props.handleSuccessfulFormSubmission(post);
  }

  // onHandleSubmit(e) {
  //   e.preventDefault();
  //   const post = {
  //     title: this.state.title,
  //     body: this.state.body,
  //   };
  //   database.push(post);
  //   this.setState({
  //     title: '',
  //     body: '',
  //   });
  // }

  render() {
    return (
      <ReactModal
        style={this.customStyles}
        onRequestClose={() => {
          console.log('testing modal close');
        }}
        isOpen={this.props.modalIsOpen}
      >
        <BlogForm
          handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
        />
      </ReactModal>
    );
  }
}
