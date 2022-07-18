import React, { Component } from 'react';
import Header from './Header';
import withRouter from '../utils/withrouter';
import Loader from './Loader';

import { Link, NavLink } from 'react-router-dom';

class SingleArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: null,
    };
  }

  componentDidMount() {
    let slug = this.props.params.slug;
    fetch('https://mighty-oasis-08080.herokuapp.com/api/articles/' + slug)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.article);
        this.setState({
          article: data.article,
        });
      });
  }

  render() {
    const { article } = this.state;
    console.log(article, 'Articleee');
    return (
      <div className="singlearticle">
        {!this.state.article ? (
          <Loader />
        ) : (
          <div>
            <div className="singlearticlehero">
              <div className="container">
                <h3>{article.title}</h3>
                <div className="flex">
                  <div>
                    <img src={article.author.image}></img>
                  </div>
                  <div>
                    <h4>
                      {article.author.username.charAt(0).toUpperCase() +
                        article.author.username.slice(1)}
                    </h4>
                    <p>{article.createdAt}</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="container body">{article.body}</p>
            <hr className="container hr" />
            <p className="container navlink">
              <span>
                <NavLink to="/signup">Sign Up</NavLink>{' '}
              </span>
              or
              <span>
                <NavLink to="/login" activeClassName="active">
                  Sign In
                </NavLink>
              </span>
              to add comments and articles.
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(SingleArticle);
