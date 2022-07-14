import React, { Component } from 'react';
import Loader from './Loader';

class Taglist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tagLists: null,
    };
  }

  componentDidMount() {
    fetch('https://mighty-oasis-08080.herokuapp.com/api/tags')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          tagLists: data.tags,
        });
      });
  }

  render() {
    const { tagLists } = this.state;
    return (
      <>
        {!this.state.tagLists ? (
          <Loader />
        ) : (
          <div className="w-2/6 right flex flex-wrap">
            {Array.isArray(tagLists) &&
              tagLists.map((tag) => {
                // console.log(tag);
                return (
                  <button
                    className="bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                    key={tag}
                    onClick={({ target }) =>
                      this.props.handleActiveTab(target.innerText)
                    }
                  >
                    {tag}
                  </button>
                );
              })}
          </div>
        )}
      </>
    );
  }
}

export default Taglist;
