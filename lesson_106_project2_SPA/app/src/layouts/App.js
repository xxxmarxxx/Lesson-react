import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
      <div className="App">
        SPA
      </div>
      </Router>
     );
  }
}
 
export default App;
