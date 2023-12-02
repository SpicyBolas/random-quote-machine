//Import required packages
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
//Take an initial color
const init_col = col_arr[Math.floor(Math.random()*col_arr.length)];

//Random Quote Machine App
class App extends React.Component {
  constructor(props){
    super(props);
    //Get random index for the quote object
    let quoteIdx = Math.floor(Math.random()*quote_arr.length);
    //Concatenate the quote and convert for the URL for twitter
    let fullQuote = quote_arr[quoteIdx].quote + ' ' + quote_arr[quoteIdx].author; 
    fullQuote = encodeURIComponent(fullQuote);

    this.state = {
      quote_index: quoteIdx, //store quote array index
      styleBGObj: {backgroundColor: init_col}, //Background color index
      styleColObj: {color: init_col}, //text color
      styleHovObj: {color: init_col,backgroundColor: 'grey'}, //Hover on Button style
      hoverState: false, //is mouse hovering over the button?
      urlQuote: fullQuote, //full quote for tweet
      contHeight: {height: '20px'}, //initial height for quote
      iter: 0 //counter to determine when the button has been clicked
    }
    this.handleOnClick=this.handleOnClick.bind(this); //bind for button click
    this.handleMouseEnter = this.handleMouseEnter.bind(this); //bind for hover on
    this.handleMouseLeave = this.handleMouseLeave.bind(this); //bind for hover off
  }
  //New quote button click
  handleOnClick(event){
    //randomly select a quote
    let quote_index = Math.floor(Math.random()*quote_arr.length);
    let col = col_arr[Math.floor(Math.random()*col_arr.length)];
    //convert into the full quote for the tweet url
    let fullQuote = quote_arr[quote_index].quote + ' ' + quote_arr[quote_index].author; 
    fullQuote = encodeURIComponent(fullQuote);
    //Set the state based on randomly selected values
    this.setState((state,props)=>({
        quote_index: quote_index,
        styleBGObj: {backgroundColor: col,color: '#ECE3CE'},
        styleColObj: {color: col},
        styleHovObj : {color: col,backgroundColor: 'grey'},
        urlQuote: fullQuote,
        iter: state.iter +1
    }));
  }
  //switch hover mode to "on"
  handleMouseEnter(event){
    this.setState({
      hoverState: true
    })
  }
  //switch hover mode to "off"
  handleMouseLeave(event){
    this.setState({
      hoverState: false
    })
  }
  
  //Update quote box height for first render
  componentDidMount(){
    document.title = "Random Quote Machine";
    var textDiv = document.querySelector('#quote'); //get the quote property
    var newHeight = 25+textDiv.scrollHeight; //calculate updated height
    //Update the the height
    this.setState({
      contHeight: {height: newHeight+"px"}
    })
    
};
  //Update the box height ever time the button is clicked and iter updates
  componentDidUpdate(prevProps,prevState){  
    if(this.state.iter!==prevState.iter){
      var textDiv = document.querySelector('#quote'); //extract element info
      var newHeight = 25+textDiv.scrollHeight; //calculate new height
      
      //Update the box height
      this.setState({
        contHeight: {height: newHeight+"px"}
      });
      }
  };

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
        <div id="quote-box" style={this.state.contHeight}>
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
                  <FontAwesomeIcon icon={faXTwitter} size={700} color={this.state.styleBGObj.backgroundColor} style={{transition: 'color 1s linear'}}/>
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
