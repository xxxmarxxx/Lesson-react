import React, { Component } from "react";
import "./App.css";
import Word from "./Word";

class App extends Component {
  state = {
    words: [] /* zadanie AJAX */,
    isLoaded: false,
  };

  componentDidMount() {
    setTimeout(this.fetchData, 3000)
    // fetch('data/words.json')
    // .then(response => response.json() )
    // .then(data => {
    //   this.setState({
    //     words: data.words,
    //     isLoaded: true
    //   })
    // })
  }

  fetchData = ()=> {
    fetch('data/words.json')
    .then(response => response.json() )
    .then(data => {
      this.setState({
        words: data.words,
        isLoaded: true
      })
    })
  }

  render() {
    console.log("render");
    const words = this.state.words.map(word => (
      <Word key={word.id} english={word.en} polish={word.pl}/>
    ))
    return (
      <>
      <h1>lesson 76 JSON i metoda fetch</h1>
       <ul className="App">
         {this.state.isLoaded ? words : <p>"Wczytuje dane !!" </p>}
         </ul>
         </>
       );
  }
}

export default App;
