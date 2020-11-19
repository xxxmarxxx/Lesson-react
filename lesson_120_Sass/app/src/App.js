import React, { Component } from "react";
import "./App.scss";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <header>
          <div className="App">Hallo world</div>
        </header>
        <Footer />
      </>
    );
  }
}

export default App;
