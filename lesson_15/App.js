class App extends React.Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    console.log("Zawartosc w evencie:" + e.target.value);
    console.log("Zawartosc value przed setState:" + this.state.value);
    this.setState({
      value: e.target.value,
    });
    console.log("Zawartosc value po setState:" + this.state.value);
  };

  handleClick = () => {
    this.setState({
      value: "",
    });
  };

  render() {
    console.log("Zawartosc value w tracie render:" + this.state.value);
    return (
      <>
      <h2>Input and Reset</h2>
        <input
          value={this.state.value}
          placeholder="wpisz..."
          onChange={this.handleChange.bind(this)}
          type="text"
        />
        <button onClick={this.handleClick}>Reset</button>
        <h1 className="title">{this.state.value.toLocaleUpperCase()}</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
