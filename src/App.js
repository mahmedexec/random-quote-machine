import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import {TwitterShareButton} from "react-share";
import {TwitterIcon} from "react-share";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: ''
    };
  }
  handleClick = () => {
    fetch('https://programming-quotes-api.herokuapp.com/quotes/random').then(res => res.json()).then(Quote => {
      this.setState({quote: Quote.en, author: Quote.author});
    });
  }
  componentDidMount() {
    fetch('https://programming-quotes-api.herokuapp.com/quotes/random').then(res => res.json()).then(Quote => {
      this.setState({quote: Quote.en, author: Quote.author});
    });
  }

  render() {
    return (<div className="container-fluid">

      <div className="App">

        <h1 className="responsive-text text-center">
          Random Quote Generator
        </h1>

        <div id="quote-box" className="card">
          <div className="card-body">

            <blockquote class="blockquote">

              <h3 id="text">
                "{this.state.quote}"
              </h3>

            </blockquote>

            <footer class="blockquote-footer">

              <h4 id="author">
                {this.state.author}
              </h4>

            </footer>

            <a id="new-quote" className="btn" onClick={this.handleClick}>
              New Quote
            </a>

            <a className="twitter-share-button btn btn-primary" id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${this.state.quote} ${this.state.author}`}>
              <i class="fab fa-twitter"/> tweet
            </a>

          </div>

        </div>

      </div>
    </div>);
  }
}

export default App;
