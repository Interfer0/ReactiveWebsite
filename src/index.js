import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Top from './Components/Top';
import './index.css';
import {Router, Route, browserHistory} from 'react-router';

ReactDOM.render((
  <Top />
), document.getElementById('Top'));

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
), document.getElementById('root'));