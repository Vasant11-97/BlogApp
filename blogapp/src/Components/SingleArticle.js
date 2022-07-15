import React, { Component } from 'react';
import Header from './Header';
import withRouter from '../utils/withrouter';
import Loader from './Loader';

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
      <>
        <Header />

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
                    <h4>{article.author.username}</h4>
                    <p>{article.createdAt}</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="container">{article.body}</p>
          </div>
        )}
      </>
    );
  }
}

export default withRouter(SingleArticle);
