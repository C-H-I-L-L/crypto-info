import React, { Component } from 'react';

import axios from 'axios';
import RichTextEditor from '../forms/rich-text-editor';
import DropzoneComponent from 'react-dropzone-component';

export default class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      blog_status: '',
      content: '',
      featured_image: '',
    };
  }

  componentConfig = () => {
    return {
      iconFiletypes: ['.jpg', '.png'],
      showFiletypeIcon: true,
      postUrl: 'https://httpbin.org/post',
    };
  };

  djsConfig = () => {
    return {
      addRemoveLinks: true,
      maxFiles: 1,
    };
  };

  handleFeaturedImageDrop = () => {
    return { addedfile: (file) => this.setState({ featured_image: file }) };
  };

  buildForm() {
    let formData = new FormData();

    formData.append('portfolio_blog[title]', this.state.title);
    formData.append('portfolio_blog[blog_status]', this.state.blog_status);
    formData.append('portfolio_blog[content]', this.state.content);

    if (this.state.featured_image) {
      formData.append(
        'portfolio_blog[featured_image]',
        this.state.featured_image
      );
    }

    return formData;
  }

  handleSubmit = (event) => {
    axios
      .post(
        'https://wubbalubbadubbdubb.devcamp.space/portfolio/portfolio_blogs',
        this.buildForm(),
        { withCredentials: true }
      )
      .then((response) => {
        this.setState({
          title: '',
          blog_status: '',
        });

        this.props.handleSuccessfullFormSubmission(
          response.data.portfolio_blog
        );
      })

      .catch((error) => {
        console.log('handleSubmit for blog error', error);
      });

    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleRichTextEditorChange = (content) => {
    this.setState({ content });
  };

  render() {
    return (
      <form className='blog-form-wrapper' onSubmit={this.handleSubmit}>
        <input
          type='text'
          onChange={this.handleChange}
          name='title'
          placeholder='Blog Title'
          value={this.state.title}
        />

        <input
          type='text'
          onChange={this.handleChange}
          name='blog_status'
          placeholder='Blog status'
          value={this.state.blog_status}
        />

        <div className='one-column'>
          <RichTextEditor
            handleRichTextEditorChange={this.handleRichTextEditorChange}
          />
        </div>

        <div className='image-uploaders'>
          <DropzoneComponent
            config={this.componentConfig()}
            djsConfig={this.djsConfig()}
            eventHandlers={this.handleFeaturedImageDrop()}
          >
            <div className='dz-message'>Featured Image</div>
          </DropzoneComponent>
        </div>

        <button>Save</button>
      </form>
    );
  }
}
