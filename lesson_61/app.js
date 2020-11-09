class Clicker extends React.Component {
  state = {
    number1: 0,
    number2: 0,
    number3: 0,
  };

  handleClick1 = () => {
    this.setState({
      number1: this.state.number1 + 1,
    });
    //console.log(this.state.number1 + "w metodzie handleClick");
  };
  handleClick2 = () => {
    this.setState({
      number2: this.state.number2 + 1,
    });
    this.setState({
      number2: this.state.number2 + 1,
    });
    this.setState({
      number2: this.state.number2 + 1,
    });
    //  console.log(this.state.number2 + "w metodzie handleClick");
  };
  handleClick3 = () => {
    this.setState((state) => {
      return {
        number3: this.state.number3 + 1,
      };
    });
    this.setState(() => ({
      number3: this.state.number3 + 1,
    }));
    this.setState(() => ({
      number3: this.state.number3 + 1,
    }));
    console.log(this.state.number3 + "w metodzie handleClick");
  };
  render() {
    console.log(this.state.number1 + "w render");
    return (
      <>
        <button onClick={this.handleClick1}>Podbil o 1</button>
        <h1>{this.state.number1}</h1>
        <button onClick={this.handleClick2}>Podbil o 3</button>
        <h1>{this.state.number2}</h1>
        <button onClick={this.handleClick3}>Podbil o 3</button>
        <h1>{this.state.number3}</h1>
      </>
    );
  }
}

ReactDOM.render(<Clicker />, document.getElementById("root"));
