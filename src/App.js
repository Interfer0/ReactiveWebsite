import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/main.css';
import './styles/App.css';

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

          <div  id="waves" className="cubes">
            <span>Career <br/>and <br/>History</span>
          </div>
          <div className="cubes">
            Certifications <br/>and <br/>Training
          </div>
          <div className="cubes">
            Hobbies
          </div>
        </div>

      </div>
    );
  }
}

export default App;
