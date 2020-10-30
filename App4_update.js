class Counter extends React.Component {
  state = {
    count: 0,
    result: this.props.result,
  };

  handlerMathClick = (type, number = 1 ) => {
    // debugger
    if (type === "subtraction") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: prevState.result - number,
      }));
    } else if (type === "reset") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: this.props.result,
      }));
    } else if (type === "addition") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: prevState.result + number,
      }));
    }
  }

  render() {
    return (
      <>
        <MathButton
          name="-10"
          number="10"
          type="subtraction"
          click={this.handlerMathClick}
        />
        <MathButton
          name="-1"
          number="1"
          type="subtraction"
          click={this.handlerMathClick}
        />
        <MathButton
          name="reset"
          type="reset"
          click={this.handlerMathClick}
        />
        <MathButton
          name="+1"
          number="1"
          type="addition"
          click={this.handlerMathClick}
        />
        <MathButton
          name="+10"
          number="10"
          type="addition"
          click={this.handlerMathClick}
        />

        <h1>Liczba klickniec: {this.state.count}</h1>
        <h1>Wynik: {this.state.result}</h1>
      </>
    );
  }
}

const MathButton = (props) => {
  const number = parseInt(props.number)
  return (
    <button onClick={() => props.click(props.type, number)}>
      {props.name}
    </button>
  );
};

const startValue = 0;
ReactDOM.render(<Counter result={startValue} />,document.getElementById("root"));
