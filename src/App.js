import './App.css';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXTwitter} from '@fortawesome/free-brands-svg-icons';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons'; 

//Create an array of objects for quotes and authors
const quote_arr = [{quote: '\"A rose by any other name would smell as sweet.\"',
author: '- William Shakespeare'},
{quote: '\"Ask not what your country can do for you; ask what you can do for your country.\"',
author: '- John F. Kennedy'},
{quote: '\"Eighty percent of success is showing up.\"',
author: '- Woody Allen'},
{quote: '\"Elementary, my dear Watson.\"',
author: '- Sherlock Holmes'},
{quote: "\"Frankly, my dear, I don't give a damn\"",
author: '- Rhett Butler'},
{quote: '\"Hell is other people\"',
author: '- Jean-Paul Sartre'},
{quote: '\"I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.\"',
author: '- Martin Luther King Jr.'},
{quote: '\"Three can keep a secret, if two of them are dead.\"',
author: '- Benjamin Franklin'},
{quote: '\"You must be the change you wish to see in the world.\"',
author: '- Mahatma Gandhi'},
{quote: "\"You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time.\"",
author: "- Abraham Lincoln"}
];

//Create an array of background colors
const col_arr = ['#4F6F52','#6a5acd','#ee82ee','#ffa500',
'#00ff61','#00aeff','#ff0000'];

const init_col = col_arr[Math.floor(Math.random()*col_arr.length)];

class App extends React.Component {
  constructor(props){
    super(props);
    let quoteIdx = Math.floor(Math.random()*quote_arr.length);
    let fullQuote = quote_arr[quoteIdx].quote + ' ' + quote_arr[quoteIdx].author; 
    fullQuote = encodeURIComponent(fullQuote);

    this.state = {
      quote_index: quoteIdx,
      styleBGObj: {backgroundColor: init_col},
      styleColObj: {color: init_col},
      styleHovObj: {color: init_col,backgroundColor: 'grey'},
      hoverState: false,
      urlQuote: fullQuote
    }

    this.handleOnClick=this.handleOnClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleOnClick(event){
    let quote_index = Math.floor(Math.random()*quote_arr.length);
    let col = col_arr[Math.floor(Math.random()*col_arr.length)];
    let fullQuote = quote_arr[quote_index].quote + ' ' + quote_arr[quote_index].author; 
    fullQuote = encodeURIComponent(fullQuote);
    
    this.setState({
        quote_index: quote_index,
        styleBGObj: {backgroundColor: col,color: '#ECE3CE'},
        styleColObj: {color: col},
        styleHovObj : {color: col,backgroundColor: 'grey'},
        urlQuote: fullQuote
    });
  }

  handleMouseEnter(event){
    this.setState({
      hoverState: true
    })
  }
  handleMouseLeave(event){
    this.setState({
      hoverState: false
    })
  }
  render(){
  return (
    <div className="App">
      <Body/>
    </div>
  );
  }
}

class Body extends App {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="body" style={this.state.styleBGObj}>
        <div id="quote-box">
          <div id="quote">
            <div id="text">
              <p style={this.state.styleColObj}>{quote_arr[this.state.quote_index].quote}</p>
            </div>
            <div id="author">
              <p style={this.state.styleColObj}>{quote_arr[this.state.quote_index].author}</p>
            </div>
          </div>
            <div id="banner">
              <div id="share">
                <a id="tweet-quote" target='_blank' href={`https://twitter.com/intent/tweet/${this.state.urlQuote}`}>
                  <FontAwesomeIcon icon={faXTwitter} size={700} color={this.state.styleBGObj.backgroundColor}/>
                </a>
                <a id="fb-quote">
                  <FontAwesomeIcon icon={faFacebookSquare} size={700} color={this.state.styleBGObj.backgroundColor} />
                </a>
                </div>
              <button id="new-quote" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} style={this.state.hoverState ? this.state.styleHovObj : this.state.styleBGObj} onClick={this.handleOnClick}>New Quote</button>
            </div>
        </div>
        <div id="creator">
              <p>By SpicyBolas</p>
        </div>
      </div>
    );
  }

}


export default App;
