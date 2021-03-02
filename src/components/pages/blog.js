import React, { Component } from 'react';
import BlogModal from '../modals/blog-modal';
import BlogItem from '../blog/blog-itemg-item';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import '../styles/blog.scss';

class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blogItems: [],
      totalCount: 0,
      currentPage: 0,
      isLoading: true,
      blogModalIsOpen: false,
    };
    // not working right now
    // window.addEventListener('scroll', this.onScroll, false);
  }

  // componentDidMount(user) {
  //   if (user.email === 'thisbeme.email.yarrr@gmail.com' && this.state.loggedInStatus !== 'LOGGED_IN') {
     
  // } this.setState({
  //       loggedInStatus: 'LOGGED_IN'
  //     })
  //   }
  //   if (user.email !== 'thisbeme.email.yarrr@gmail.com' && this.state.loggedInStatus !== 'NOT_LOGGED_IN') {
  //     this.setState({
  //       loggedInStatus: 'NOT_LOGGED_IN'
  //     })
  //   }

  handleSuccessfulNewBlogSubmission = (blog) => {
    this.setState({
      blogModalIsOpen: false,
      blogPosts: [blog].concat(this.state.blogPosts),
    });
  };

  getBlogItems = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
    axios
      .get('https://polar-garden-00154.herokuapp.com/blogPosts')
      .then((response) => {
        // console.log('getting', response.data[0]);
        this.setState({
          blogItems: this.state.blogItems.concat(response.data[0]),
          totalCount: response.data[0].length,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log('getBlogItems error', error);
      });
  };

  UNSAFE_componentWillMount() {
    this.getBlogItems();
  }

  UNSAFE_componentWillUnmount = () => {
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
      document.documentElement.offsetHeight
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

  handleDeleteClick = (blog) => {
    axios
      .delete(`https://polar-garden-00154.herokuapp.com/blogPost/${blog.id}`, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({
          blogItems: this.state.blogItems.filter((blogItem) => {
            return blog.id !== blogItem.id;
          }),
        });

        return response.data;
      })
      .catch((error) => {
        console.log('delete blog error', error);
      });
  };

  render = () => {
    const admin = `${process.env.REACT_APP_ADMIN_EMAIL}`;
    const blogRecords = this.state.blogItems.map((blogItem) => {
      if (this.props.adminEmail === admin)
        {
        return (
          <div key={blogItem.id} className='admin-blog-wrapper'>
            <BlogItem adminEmail={this.props.adminEmail} blogItem={blogItem} />

              <FontAwesomeIcon onClick={() => this.handleDeleteClick(blogItem)} icon='trash' />
            
          </div>
        );
      } else {
        return <BlogItem key={blogItem.id} blogItem={blogItem} />;
      }
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

        {this.props.adminEmail === admin ? 
          <div className='new-blog-link'>
              <FontAwesomeIcon onClick={this.handleNewBlogClick} icon='feather-alt' />
          </div>
        :
          null
        }
      

        <div className='content-loader'>
          {this.state.isLoading ? (
            <FontAwesomeIcon icon='circle-notch' spin />
          ) : null}
        </div>

        <div className='content-container'>{blogRecords}</div>
      </div>
    );
  };
}

export default Blog;
