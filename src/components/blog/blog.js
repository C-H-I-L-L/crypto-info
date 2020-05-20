import React, { Component } from 'react';
import { database } from '../../firebase';
import firebase from 'firebase';
import _ from 'lodash';
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
      title: '',
      body: '',
      posts: [],
      timeStamp: '',
      date: '',
      isLoading: true,
      blogModalIsOpen: false,
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    // this.onHandleSubmit = this.onHandleSubmit.bind(this);

    this.handleNewBlogClick = this.handleNewBlogClick.bind(this);
    this.getBlogItems = this.getBlogItems.bind(this);
    this.onScroll = this.onScroll.bind(this);
    window.addEventListener('scroll', this.onScroll, false);

    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(
      this
    );
  }

  getBlogItems() {
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
  }

  componentWillMount() {
    this.getBlogItems();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
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
  }

  componentDidMount() {
    database.on('value', (snapshot) => {
      this.setState({
        posts: snapshot.val(),
      });
    });
  }

  handleNewBlogClick() {
    this.setState({
      blogModalIsOpen: true,
    });
  }

  handleModalClose() {
    this.setState({
      blogModalIsOpen: false,
    });
  }

  handleSuccessfulFormSubmission() {
    this.setState({
      blogModalIsOpen: false,
    });
  }

  onHandleChange() {
    console.log('sure');
  }

  render() {
    const blogRecords = this.state.blogItems.map((blogItem) => {
      return <BlogItem key={blogItem.id} blogItem={blogItem} />;
    });

    return (
      <div className='blog-container'>
        <BlogModal modalIsOpen={this.state.blogModalIsOpen} />
        <a onClick={this.handleNewBlogClick}>Open Modal!</a>
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
  }
}

export default Blog;
