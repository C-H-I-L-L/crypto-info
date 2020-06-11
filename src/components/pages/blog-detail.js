import React, { Component } from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

import BlogFeaturedImage from '../blog/blog-featured-image';
import BlogForm from '../blog/blog-form';

export default class BlogDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: this.props.match.params.slug,
      blogItem: {},
      editMode: false,
      id: '',
    };
  }

  handleEditClick = () => {
    this.setState({
      editMode: true,
    });
  };

  componentDidMount() {
    this.getBlogItem();
  }

  componentWillMout() {
    if (this.props.editMode) {
      this.setState({
        id: this.props.blog.id,
        title: this.props.blog.title,
        status: this.props.blog.status,
      });
    }
  }

  getBlogItem() {
    axios
      .get(
        `https://wubbalubbadubbdubb.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`
      )
      .then((response) => {
        this.setState({
          blogItem: response.data.portfolio_blog,
        });
      })
      .catch((error) => {
        console.log('getBlogItem error', error);
      });
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
          <BlogForm editMode={this.state.editMode} blog={this.state.blogItem} />
        );
      } else {
        return (
          <div className='content-container'>
            <h1 onClick={this.handleEditClick}>{title}</h1>

            <BlogFeaturedImage img={featured_image_url} />

            <div className='content'>
              <div>{ReactHtmlParser(content)}</div>
            </div>
            <div className='status'>{blog_status}</div>
          </div>
        );
      }
    };

    return <div className='blog-container'>{contentManager()}</div>;
  }
}
