class App extends React.Component {
  state = {
    
  };

  render() {
    return (
      <>
      <h1>Lesson 64 Kalkulator</h1>
      <p>Kalkulator mnozy przez dwa, jesli suma jest mniejsza niz 1000. Po przekroczeniu 1000 Kalkulator mnozy prez 0.5 az osiagnie sume mniejsza niz jeden. Wtedy ponownie zaczyna mnozyc przez dwa. </p>

      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
