import React, { Component } from 'react';
import Loader from './Loader';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

class Articles extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { articles } = this.props;
    return (
      <>
        {!articles ? (
          <Loader />
        ) : (
          <div className="w-3/5 left">
            {Array.isArray(articles) &&
              articles.map((article) => {
                console.log(article, 'slug wala');
                return (
                  <div className="article shadow-lg w-full" key={article.slug}>
                    <div className="flex justify-content">
                      <div className="flex">
                        <div className="image rounded-t-full">
                          <img src={article.author.image} className=""></img>
                        </div>
                        <div>
                          <h3>
                            {article.author.username.charAt(0).toUpperCase() +
                              article.author.username.slice(1)}
                          </h3>
                          <p>{article.createdAt}</p>
                        </div>
                      </div>
                      <div className="flex align-item">
                        <AiOutlineHeart />
                        <span>0</span>
                      </div>
                    </div>
                    <h2>Title: {article.title}</h2>
                    <p>Description: {article.description}</p>
                    <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                      <Link to={`/articles/${article.slug}`}>Read More...</Link>
                    </button>
                  </div>
                );
              })}
          </div>
        )}
      </>
    );
  }
}

export default Articles;
