import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/main.css';
import './styles/App.css';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">


        <p className="App-intro">
          <img src='' className="intro-pic" />
          <div className="intro-title">
              <div className="intro-fname">
                Daniel
              </div>
              <div className="intro-lname">
                Bigelow 
              </div>
          </div>
        </p>

        <div className="cubes-app">

          <div  className="cubes" id="ocIMG">
            <span>Career <br/>and <br/>History</span>
          </div>
          <div className="cubes" id="thIMG">
            Certifications <br/>and <br/>Training
          </div>
          <div className="cubes" id="hikingIMG">
            Hobbies
          </div>
        </div>

        <div className="words-app">
          <div className="words-about">
            <b>About Me:</b>
            <p>
            When I was young I was walking home from the cinema with my family. 
            As we rounded the corner on that dark dark night, we came apon a mugger. 
            Everything that happened next wend by in a flash. The murder of my parents was front page news the next day. 
            </p>
            <p>
            For year as I grew up their deaths haunted me. It became my obsession. Even before my sixteenth birthday I was
            studying hard for what I knew needed to be done. Before I was even an adult, I knew I must stop the type of sensless
            murder that took my parents. 
            </p> 
            <p>
            Using my parents vast forture, I traveled the work in order to accumulate knowledge. Knowing that one dark night I 
            would emerge and strike fear into the hearts of evil, and hope into the hearts of those that feel hopeless. 
            </p>
          </div>
        </div>

        <div className="footer-app">
            <p>Additional Resources:</p>
            <Link to='/' className="footLink">Copyright</Link>
            <Link to='/Goals' className="footLink">Careers</Link>
            <Link to='/Classes' className="footLink">Links</Link>
            <Link to='/About' className="footLink">Search</Link>

        </div>

      </div>
    );
  }
}

export default App;
