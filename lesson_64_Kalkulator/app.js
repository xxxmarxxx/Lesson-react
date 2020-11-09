class App extends React.Component {
  state = {
    result:1,
    ratio: 2,
    
  };

  render() {
    return (
      <>
      <h1>Lesson 64 Kalkulator</h1>
      <p>Kalkulator mnozy przez dwa, jesli suma jest mniejsza niz 1000. Po przekroczeniu 1000 Kalkulator mnozy prez 0.5 az osiagnie sume mniejsza niz jeden. Wtedy ponownie zaczyna mnozyc przez dwa. </p>
      <button>{`Pomoz przez ${this.state.ratio}`}</button>
      <h1>Wynik</h1>

      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
