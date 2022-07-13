import React, { Component } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import '../Style/main.scss';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      articles: null,
      tagLists: null,
    };
  }
  componentDidMount() {
    // fetch('https://mighty-oasis-08080.herokuapp.com/api/articles')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     this.setState({
    //       data: data.articles,
    //     });
    //   });

    Promise.all([
      fetch('https://mighty-oasis-08080.herokuapp.com/api/articles'),
      fetch('https://mighty-oasis-08080.herokuapp.com/api/tags'),
    ])
      .then(([articlesResponse, tagsResponse]) =>
        Promise.all([articlesResponse.json(), tagsResponse.json()])
      )
      .then(([articles, tags]) => {
        this.setState({
          articles: articles.articles,
          tagLists: tags.tags,
        });
      });
  }
  render() {
    const { articles, tagLists } = this.state;
    return (
      <>
        <main className=" main container">
          <div className="global">Global Feed</div>
          <div className="flex justify-between ">
            <div className="w-3/5 left">
              {/* {Array.isArray(this.state.data)
                ? this.state.data.map((article) => {
                    console.log(article);
                  })
                : console.log("error")} */}

              {Array.isArray(articles) &&
                articles.map((article) => {
                  console.log(article);
                  return (
                    <div className="article shadow-lg w-full">
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
                        <div>
                          <AiOutlineHeart />
                        </div>
                      </div>
                      <h2>Title: {article.title}</h2>
                      <p>Description: {article.description}</p>
                      <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                        Read More...
                      </button>
                    </div>
                  );
                })}
            </div>
            <div className="w-2/6 right flex flex-wrap">
              {Array.isArray(tagLists) &&
                tagLists.map((tag) => {
                  return (
                    <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
                      {tag}
                    </button>
                  );
                })}
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Main;
