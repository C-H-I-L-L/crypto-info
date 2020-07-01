import React, { Component } from 'react';

import '../styles/news.scss';

export default class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch(
      'http://newsapi.org/v2/everything?q=bitcoin&from=${moment}&sortBy=publishedAt&apiKey=bbbe441196a54f8b97f2708a349700aa'
    )
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({ articles: myJson.articles });
      })
      .then(this.setState({ loading: false }));
  }

  render() {
    return (
      <>
        <div className='news-map-container'>
          {this.state.articles.map((item, index) => {
            return (
              <a className='news-card' href={item.url} key={index}>
                <div className='top'>
                  <div className='left'>
                    <h2>{item.title}</h2>
                    <p>author: {item.author}</p>
                    <p>{item.content}</p>
                    {/* <a href={item.url}>Read More</a> */}
                  </div>
                  <div className='right'>
                    <img src={item.urlToImage} alt='' />
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
    );
  }
}
