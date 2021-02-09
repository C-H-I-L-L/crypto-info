import React, { Component } from 'react';

import axios from 'axios';
import RichTextEditor from '../forms/rich-text-editor';
import DropzoneComponent from 'react-dropzone-component';

import '../../../node_modules/react-dropzone-component/styles/filepicker.css';
import '../../../node_modules/dropzone/dist/min/dropzone.min.css';
// import { fileURLToPath } from 'url';


export default class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      blog_status: 0,
      content: '',
      featured_image: '',
      apiUrl: 'https://polar-garden-00154.herokuapp.com/blogPost',
      apiMethod: 'post',
    };

    this.deleteImage = this.deleteImage.bind(this);
    this.featuredImageRef = React.createRef();
    this.componentConfig = this.componentConfig.bind(this);
  }


  componentWillMount() {
    if (this.props.editMode) {
      this.setState({
        id: this.props.blog.id,
        title: this.props.blog.title,
        blog_status: this.props.blog.published,
        content: this.props.blog.content,
        featuredimage: this.props.blog.featured_image,
        apiUrl: `https://polar-garden-00154.herokuapp.com/blogPost/${this.props.blog.id}`,
        apiMethod: 'put',
      });
    }
  }

  componentConfig() {
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

  handleFeaturedImageDrop() {
   return { addedfile: (file) => {
    const promise = new Promise((resolve, reject) => {
      const reader = new FileReader()
    
      reader.readAsDataURL(file)
    
      reader.onload = () => {
        if (!!reader.result) {
          resolve(reader.result)
        }
        else {
          reject(Error("Failed converting to base64"))
        }
      }
    })
    promise.then(result => {
      this.setState({
        featured_image: `${result}`
      })
    }, err => {
      console.log(err)
    })
   }
   }
  }

  handleSubmit = (event) => {
    axios({
      method: this.state.apiAction,
      url: this.state.apiUrl,
      data: {
        title: this.state.title,
        content: this.state.content,
        featured_image: this.state.featured_image,
        published: parseInt(this.state.blog_status),
      },
      withCredentials: true,
    })
      .then((response) => {
        if (this.state.featured_image) {
          this.featuredImageRef.current.dropzone.removeAllFiles();
        }
        this.setState({
          title: '',
          blog_status: '',
          published: 0,
          featured_image: '',
        });

        if (this.props.editMode) {
          this.props.handleUpdateFormSubmission(response.data);
        } else {
          this.props.handleSuccessfullFormSubmission(response.data);
        }
      })
      .catch((error) => {
        console.log('handleSubmit for blog error', error);
      });

    event.preventDefault();
  };

  handleSubmit = (event) => {
    const blog_status = this.state.blog_status === true ? 1 : 0;
    const image = !this.state.featured_image ? '' : this.state.featured_image;
    
    axios({
      method: this.state.apiMethod,
      url: this.state.apiUrl,
      data: {
        title: this.state.title,
        content: this.state.content,
        published: blog_status,
        featured_image: image
      },
      withCredentials: true,
    })
      .then((response) => {
        this.setState({
          title: '',
          blog_status: 0,
          content: '',
          featured_image: '',
        });

        if (this.state.featured_image) {
          this.featuredImageRef.current.dropzone.removeAllFiles();
        }

        if (this.props.editMode) {
          this.props.handleUpdateFormSubmission(response.data);
        } else {
          this.props.handleSuccessfullFormSubmission(response.data[0]);
          window.location.reload();
        }
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

  handleStatusChange = (event) => {
    event.target.value === false
      ? this.setState({
          [event.target.name]: 0,
        })
      : this.setState({
          [event.target.name]: 1,
        });
  };

  handleRichTextEditorChange = (content) => {
    this.setState({ content });
  };

  deleteImage() {
    axios({
      method: 'delete',
      url: this.state.apiUrl,
      data: {
        title: this.state.title,
        content: this.state.content,
        published: this.state.published,
        featured_image: '',
      },
      withCredentials: true,
    })
      .then((response) => {
        this.props.handleFeaturedImageDelete();
      })
      .catch((error) => {
        console.log('deleteImage error', error);
      });
  }

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

        {/* <input
          type='text'
          onChange={this.handleChange}
          name='blog_status'
          placeholder='Blog status'
          value={this.state.blog_status}
        /> */}

        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        Not working riht now
        >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

        {/* <label>
          Published?
          <select
            name='blog_status'
            placeholder='Blog Status'
            onChange={this.handleStatusChange}
            value={this.state.blog_status}
          >
            <option value='false'>false</option>
            <option value='true'>true</option>
          </select>
        </label> */}

        <div className='one-column'>
          <RichTextEditor
            handleRichTextEditorChange={this.handleRichTextEditorChange}
            editMode={this.props.editMode}
            contentToEdit={
              this.props.editMode && this.props.blog.content
                ? this.props.blog.content
                : null
            }
          />
        </div>

            <div className='image-uploaders'>
          {this.props.editMode && this.props.blog.featured_image ? (
            <div className='blog-image-wrapper'>
              <img src={this.props.blog.featured_image} alt='' />

              <div className='image-removal link'>
                <a href='#' onClick={this.deleteImage}>
                  Remove file
                </a>
              </div>
            </div>
          ) : (
            <DropzoneComponent
              config={this.componentConfig()}
              djsConfig={this.djsConfig()}
              eventHandlers={this.handleFeaturedImageDrop()}
            >
              <div className='dz-message'>Featured Image</div>
            </DropzoneComponent>
          )}
        </div>

        <button>Save</button>
      </form>
    );
  }
}
