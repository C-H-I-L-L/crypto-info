import React, { Component } from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

import BlogFeaturedImage from '../blog/blog-featured-image';
import BlogForm from '../blog/blog-form';
import Share from '../helpers/share';

export default class BlogDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: this.props.match.params.slug,
      blogItem: {},
      editMode: false,
    };
    this.getBlogItem = this.getBlogItem.bind(this);
  }

  handleUpdateFormSubmission = (blog) => {
    this.setState({
      blogItem: blog,
      editMode: false,
    });
  };

  handleFeaturedImageDelete = () => {
    this.setState({
      blogItem: {
        featured_image_url: '',
      },
    });
  };

  handleEditClick = () => {
    if (this.props.loggedInStatus === 'LOGGED_IN') {
      this.setState({
        editMode: true,
      });
    }
  };

  getBlogItem() {
    const id = this.state.currentId;
    axios
      .get(`http://127.0.0.1:5000/blogPost/${id}`)
      .then((response) => {
        this.setState({
          blogItem: response.data,
        });
        console.log('reponse', response.data);
      })
      .catch((error) => {
        console.log('getBlogItem error', error);
      });
  }

  componentDidMount() {
    this.getBlogItem();
  }

  render() {
    const {
      title,
      content,
      featured_image_url,
      blog_status,
    } = this.state.blogItem;

    const contentManager = () => {
      if (this.state.editMode) {
        return (
          <BlogForm
            handleFeaturedImageDelete={this.handleFeaturedImageDelete}
            editMode={this.state.editMode}
            blog={this.state.blogItem}
            handleUpdateFormSubmission={this.handleUpdateFormSubmission}
          />
        );
      } else {
        return (
          <div className='blog-detail-container'>
            <div className='share-icons'>
              <Share />
            </div>
            <div className='blog-post'>
              <h1 onClick={this.handleEditClick}>{title}</h1>

              <BlogFeaturedImage img={featured_image_url} />

              <div className='content'>
                <div>{ReactHtmlParser(content)}</div>
              </div>
              {this.props.loggedInStatus === 'LOGGED_IN' ? (
                <div className='status'>{blog_status}</div>
              ) : null}
            </div>
          </div>
        );
      }
    };

    return <div className='blog-container'>{contentManager()}</div>;
  }
}
