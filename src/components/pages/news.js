import React, { Component } from 'react';
import '../styles/news.scss';
import Moment from 'moment';

export default class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: true
    };
  }

  componentDidMount() {
    const moment = (
      <Moment format='YYYY-MM-DD'>{this.props.dateToFormat}</Moment>
    );
    this.setState({ loading: true });
    fetch(
      'http://newsapi.org/v2/everything?q=bitcoin&from=${moment}&sortBy=publishedAt&apiKey=bbbe441196a54f8b97f2708a349700aa'
    )
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({ articles: myJson.articles });
      })
      .then(this.setState({ loading: false }));
    console.log(moment);
  }

  render() {
    return this.state.loading ? (
      <div>Loading...</div>
    ) : (
      <>
        <div className='news-map-container'>
          {this.state.articles.map((item, index) => {
            return (
              <a className='news-card' href={item.url}>
                <div className='top'>
                  <div className='left'>
                    <h2>{item.title}</h2>
                    <p>{item.author}</p>
                    {/* <a href={item.url}>Read More</a> */}
                  </div>
                  <div className='right'>
                    <img src={item.urlToImage} alt='' />
                  </div>
                </div>
                <div className='bottom'>
                  <p>{item.content}</p>
                </div>
              </a>
            );
          })}
        </div>
      </>
    );
  }
}
