import React, { Component } from "react";
import "./App.css";

// pseudo rosnaca baza danych
const data = [
  {
    id: 1,
    title: "Wiadomosc numer 1",
    body: "Zawartosc wiadomosci numer 1...",
  },
  {
    id: 2,
    title: "Wiadomosc numer 2",
    body: "Zawartosc wiadomosci numer 2...",
  },
];

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Wiadomosc numer ${index}`,
    body: `Zawartosc wiadomosci numer ${index} ...`,
  });
}, 2000);

class App extends Component {
  state = {
    comments: [...data],
  };

  render() {
    const comments = this.state.comments.map((comment) => (
      <div key={comment.id}>
        <h4>{comment.title}</h4>
        <div>{comment.body}</div>
      </div>
    ));
    return (
      <div>
        <div className="App">Dziala</div>
      </div>
    );
  }
}

export default App;
