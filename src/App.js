import './App.css';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXTwitter} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons'; 
class App extends React.Component {
  constructor(props){
    super(props);
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
      <div className="body">
        <div id="quote-box">
          <div id="quote">
            <div id="text">
              <p>"I Like it this way.
                 Name's Larkin: Adam Larkin. 
                 Don't wear it out ya dig?"</p>
            </div>
            <div id="author">
              <p>- Adam Larkin</p>
            </div>
          </div>
            <div id="banner">
              <div id="share">
                <a id="tweet-quote">
                  <FontAwesomeIcon icon={faXTwitter} size={700} color="#4F6F52"/>
                </a>
                <a id="fb-quote">
                  <FontAwesomeIcon icon={faFacebook} size={700} color="#4F6F52" />
                </a>
                </div>
              <button id="new-quote">New Quote</button>
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
