import React, { Component } from 'react';
import Hero from './Hero';
import Articles from './Articles';
import Taglist from './Taglist';
import '../Style/home.scss';
import Pagination from './Pagination';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      articles: null,
      limit: 10,
      offset: 0,
      articleCount: null,
      activePage: 1,
      activeTab: '',
    };
  }

  fetchArticles = () => {
    const { limit, offset, activeTab } = this.state;

    return fetch(
      `https://mighty-oasis-08080.herokuapp.com/api/articles/?limit=${limit}&offset=${offset}` +
        (activeTab && `&tag=${activeTab} `)
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          articles: data.articles,
          articleCount: data.articlesCount,
        });
      });
  };

  componentDidMount() {
    this.fetchArticles();
  }
  handleActiveTab = (activeTab) => {
    this.setState({
      activeTab: activeTab,
      offset: 0,
    });
  };
  handleGlobal = () => {
    this.setState({
      activeTab: '',
    });
  };
  handlePagination = (activePageNumber) => {
    const offset = activePageNumber * 10 - 10;
    console.log(activePageNumber);
    this.setState({
      offset: offset,
      activePage: activePageNumber,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    console.log(prevState, ': prevState', 'currebt state: ', this.state);
    if (
      prevState.activePage !== this.state.activePage ||
      prevState.activeTab !== this.state.activeTab
    ) {
      await this.fetchArticles();
    }
  }

  render() {
    const { articles, articleCount, offset, activePage } = this.state;
    return (
      <div>
        <Hero />
        <main className=" main container">
          {this.state.activeTab === '' ? (
            <div className="global" onClick={this.handleGlobal}>
              Global Feed
            </div>
          ) : (
            <>
              <div className="global" onClick={this.handleGlobal}>
                Global Feed
              </div>
              <div>#{this.state.activeTab}</div>
            </>
          )}
          <div className="flex justify-between">
            <Articles articles={articles} />
            <Taglist handleActiveTab={this.handleActiveTab} />
          </div>
          <Pagination
            articlesCount={articleCount}
            handlePagination={this.handlePagination}
          />
        </main>
      </div>
    );
  }
}

export default Home;
