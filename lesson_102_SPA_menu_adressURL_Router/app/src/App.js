import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Link} from 'react-router-dom'

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <BrowserRouter>
      <div className="App">
      <header>
        <nav>
        <ul>
          
          {/* <li><a href="/">Start</a></li>
          <li><a href="/news">Aktualnosci</a></li>
          <li><a href="/contact">Kontakt</a></li> */}
          <li><Link to="/">Start</Link></li>
          <li><Link to="/news">Aktualnosci</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
        </ul>
        </nav>
      </header>
      <section>
        Strona - Witaj
      </section>
    </div>
    
    </BrowserRouter>
     );
  }
}
 
export default App;

