import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './Login/Login'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Route path='/fewmoresteps' component={Login} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;