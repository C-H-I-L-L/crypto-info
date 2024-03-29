import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Truncate from 'react-truncate';
import Media from 'react-media';


import magnifyingGlass from '../../resources/images/magnifyingGlass.jpg';

import '../styles/news.scss';

var moment = require('moment');

export default class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch(
      `http://localhost:3001/v2/everything?q=bitcoin&from=${moment}&sortBy=publishedAt&apiKey=bbbe441196a54f8b97f2708a349700aa`
    )
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({ articles: myJson.articles, isLoading: false });
      });
  }

  render() {
    return (
      <>
        <Media
          queries={{
            small: '(max-width: 599px)',
            medium: '(min-width: 600px) and (max-width: 1199px)',
            large: '(min-width: 1200px)',
          }}
        >
          {(matches) => (
            <>

              {matches.small && (
                <>
                  <div className='news-header'>
                    {this.state.isLoading === false ? (
                      <h1
                        style={{
                          fontSize: 20,
                          textDecoration: 'underline overline',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          transform: 'translateX(15px)',
                        }}
                      >
                        Crypto-Related News For: {moment().format('MMMM Do YYYY')}
                      </h1>
                    ) : null}
                  </div>

                  <div className='content-loader'>
                    {this.state.isLoading ? (
                      <FontAwesomeIcon icon='circle-notch' spin />
                    ) : null}
                  </div>

                  <div className='news-map-container'>
                    {this.state.articles.map((item, index) => {
                      return (
                        <a className='news-card' href={item.url} key={index}>
                          <div className='top'>
                            <div
                              className='left'
                              style={{
                                width: '50vw',
                                fontSize: '14px',
                                height: 'fit-content',
                              }}
                            >
                              <h2
                                style={{
                                  fontStyle: 'italic',
                                  fontSize: '14px',
                                }}
                              >
                                <Truncate lines={1} ellipsis='...'>
                                  {item.title}
                                </Truncate>
                              </h2>
                              <hr />
                              <p>
                                <Truncate
                                  lines={1}
                                  ellipsis=''
                                  style={{ width: '100%' }}
                                >
                                  {item.author}
                                </Truncate>
                              </p>
                              <hr />
                              <p>
                                <Truncate lines={5} ellipsis='...'>
                                  {item.content}
                                </Truncate>
                              </p>
                              {/* <a href={item.url}>Read More</a> */}
                            </div>
                            <div className='right'>
                              <img
                                src={
                                  item.urlToImage === null
                                    ? magnifyingGlass
                                    : item.urlToImage
                                }
                                style={{
                                  height: 100,
                                  transform: 'translateY(45px)',
                                }}
                                alt=''
                              />
                            </div>
                          </div>
                          {/* <div className='bottom'>
                      <p>{item.content}</p>
                    </div> */}
                        </a>
                      );
                    })}
                  </div>
                </>
              )}


              {matches.medium && (
                <>
                  <div className='news-header'>
                    {this.state.isLoading === false ? (
                      <h1>
                        Crypto-Related News For: {moment().format('MMMM Do YYYY')}
                      </h1>
                    ) : null}
                  </div>

                  <div className='content-loader'>
                    {this.state.isLoading ? (
                       <FontAwesomeIcon icon='circle-notch' spin />
                    ) : null}
                  </div>

                  <div className='news-map-container'>
                    {this.state.articles.map((item, index) => {
                      return (
                        <a className='news-card' href={item.url} key={index}>
                          <div className='top'>
                            <div className='left'>
                              <h2>
                                <Truncate lines={1} ellipsis='...'>
                                  {item.title}
                                </Truncate>
                              </h2>
                              <hr />
                              <p>{item.author}</p>
                              <hr />
                              <p>
                                <Truncate lines={4} ellipsis='...'>
                                  {item.content}
                                </Truncate>
                              </p>
                              {/* <a href={item.url}>Read More</a> */}
                            </div>
                            <div className='right'>
                              <img
                                src={
                                  item.urlToImage === null
                                    ? magnifyingGlass
                                    : item.urlToImage
                                }
                                alt=''
                              />
                            </div>
                          </div>
                          {/* <div className='bottom'>
                      <p>{item.content}</p>
                    </div> */}
                        </a>
                      );
                    })}
                  </div>
                </>
              )}


              {matches.large && (
                <>
                  <div className='news-header'>
                    {this.state.isLoading === false ? (
                      <h1>
                        Crypto-Related News For: {moment().format('MMMM Do YYYY')}
                      </h1>
                    ) : null}
                  </div>

                  <div className='content-loader'>
                    {this.state.isLoading ? (
                       <FontAwesomeIcon icon='circle-notch' spin />
                    ) : null}
                  </div>

                  <div className='news-map-container'>
                    {this.state.articles.map((item, index) => {
                      return (
                        <a className='news-card' href={item.url} key={index}>
                          <div className='top'>
                            <div className='left'>
                              <h2>
                                <Truncate lines={2} ellipsis='...'>
                                  {item.title}
                                </Truncate>
                              </h2>
                              <hr />
                              <p>{item.author}</p>
                              <hr />
                              <p className='news-content'>{item.content}</p>
                              {/* <a href={item.url}>Read More</a> */}
                            </div>
                            <div className='right'>
                              <img
                                src={
                                  item.urlToImage === null
                                    ? magnifyingGlass
                                    : item.urlToImage
                                }
                                alt=''
                              />
                            </div>
                          </div>
                          {/* <div className='bottom'>
                      <p>{item.content}</p>
                    </div> */}
                        </a>
                      );
                    })}
                  </div>
                </>
              )}
            </>
          )}
        </Media>
      </>
    )
  }
}
