import React, { Component } from 'react';
import BlogModal from '../modals/blog-modal';
import BlogItem from './blog-item';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/blog.scss';
import '../styles/loaders.scss';

// import ReactQuill from 'react-quill';

class Blog extends Component {
  constructor(props) {
    super();

    this.state = {
      blogItems: [],
      totalCount: 0,
      currentPage: 0,
      isLoading: true,
      blogModalIsOpen: false,
    };

    window.addEventListener('scroll', this.onScroll, false);
  }

  handleSuccessfulNewBlogSubmission = (blog) => {
    this.setState({
      blogModalIsOpen: false,
      blogItems: [blog].concat(this.state.blogItems),
    });
  };

  getBlogItems = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
    axios
      .get(
        `https://wubbalubbadubbdubb.devcamp.space/portfolio/portfolio_blogs?page=${this.state.currentPage}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log('getting', response.data);
        this.setState({
          blogItems: this.state.blogItems.concat(response.data.portfolio_blogs),
          totalCount: response.data.meta.total_records,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log('getBlogItems error', error);
      });
  };

  componentWillMount() {
    this.getBlogItems();
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.onScroll, false);
  };

  onScroll = () => {
    if (
      this.state.isLoading ||
      this.state.blogItems.length === this.state.totalCount
    ) {
      return;
    }
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight * 1.2
    ) {
      this.getBlogItems();
    }
  };

  handleNewBlogClick = () => {
    this.setState({
      blogModalIsOpen: true,
    });
  };

  handleModalClose = () => {
    this.setState({
      blogModalIsOpen: false,
    });
  };

  handleSuccessfulFormSubmission = () => {
    this.setState({
      blogModalIsOpen: false,
    });
  };

  onHandleChange = () => {
    console.log('sure');
  };

  render = () => {
    const blogRecords = this.state.blogItems.map((blogItem) => {
      return <BlogItem key={blogItem.id} blogItem={blogItem} />;
    });

    return (
      <div className='blog-container'>
        <BlogModal
          modalIsOpen={this.state.blogModalIsOpen}
          handleModalClose={this.handleModalClose}
          handleSuccessfulNewBlogSubmission={
            this.handleSuccessfulNewBlogSubmission
          }
        />

        {this.props.loggedInStatus === 'LOGGED_IN' ? (
          <div className='new-blog-link'>
            <a onClick={this.handleNewBlogClick}>
              <FontAwesomeIcon icon='feather-alt' />
            </a>
          </div>
        ) : null}

        <div className='content-loader'>
          {this.state.isLoading ? (
            <FontAwesomeIcon icon='circle-notch' spin />
          ) : null}
        </div>

        <div className='content-container'>{blogRecords}</div>
        {/* <BlogModal
          handleModalClose={this.handleModalClose}
          modalIsOpen={this.state.blogModalIsOpen}
          handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
        />

        <div className='new-blog-link'>
          <a onClick={this.handleNewBlogClick}>AWM A MODAL!!</a>
        </div>
        <div className='posts'>{this.renderPosts()}</div> */}
      </div>
    );
  };
}

export default Blog;
