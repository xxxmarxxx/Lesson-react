import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, NavLink, Route} from 'react-router-dom'

const Home = () => {
  // console.log("renderuje");
 return (
<h1>Strona Startowa</h1>
 );
}
const News = () => <h1>Aktualnosci</h1>
const Contact = () => <h1>Kontakt</h1>

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
      <div className="App">
      <header>
        <h1>Lesson 102/103</h1>
        <nav>
        <ul>
          {/* <li><a href="/">Start</a></li>
          <li><a href="/news">Aktualnosci</a></li>
          <li><a href="/contact">Kontakt</a></li> */}
          <li><NavLink to="/" exact activeClassName="home_selected">Start</NavLink></li>
          <li><NavLink to="/news" activeClassName="news_selected">Aktualnosci</NavLink></li>
          <li><NavLink to="/contact" activeClassName="contact_selected" activeStyle={{
            backgroundColor: '#0e4054',
            letterSpacing: '4px'}}>Kontakt</NavLink></li>
        </ul>
        </nav>
      </header>
      <section>
        <Route path="/" exact component={Home}/>
        <Route path="/news" component={News}/>
        <Route path="/contact" component={Contact}/>
        
      </section>
    </div>
    
    </Router>
     );
  }
}
 
export default App;

