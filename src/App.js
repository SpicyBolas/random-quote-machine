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

    this.state = {
      quote_index: Math.floor(Math.random()*quote_arr.length),
      styleBGObj: {backgroundColor: init_col},
      styleColObj: {color: init_col}
    }

    this.handleOnClick=this.handleOnClick.bind(this);
  }

  handleOnClick(event){
    let quote_index = Math.floor(Math.random()*quote_arr.length);
    let col = col_arr[Math.floor(Math.random()*col_arr.length)];
    this.setState({
        quote_index: quote_index,
        styleBGObj: {backgroundColor: col},
        styleColObj: {color: col}
    });
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
                <a id="tweet-quote" target='_blank' href='twitter.com/intent/tweet'>
                  <FontAwesomeIcon icon={faXTwitter} size={700} color={this.state.styleBGObj.backgroundColor}/>
                </a>
                <a id="fb-quote">
                  <FontAwesomeIcon icon={faFacebookSquare} size={700} color={this.state.styleBGObj.backgroundColor} />
                </a>
                </div>
              <button id="new-quote" style={this.state.styleBGObj} onClick={this.handleOnClick}>New Quote</button>
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
