class Counter extends React.Component {
    state = {
      count: 0,
      result: this.props.result,
    };
  
    handlerMathClick(type, number = 1) {
      //debugger
      if (type === "substraction") {
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
          <button onClick={this.handlerMathClick.bind(this, "substraction", 10)}>
            -10
          </button>
          <button onClick={() => this.handlerMathClick("substraction", 1)}>
            -1
          </button>
          <button onClick={this.handlerMathClick.bind(this, "reset")}>
            Reset
          </button>
          <button onClick={() => this.handlerMathClick("addition", 1)}>+1</button>
          <button onClick={this.handlerMathClick.bind(this, "addition", 10) }>
            +10
          </button>
          <h1>Liczba klickniec: {this.state.count}</h1>
          <h1>Wynik: {this.state.result}</h1>
        </>
      );
    }
  }
  const startValue = 0;
  ReactDOM.render(<Counter result={startValue}/>, document.getElementById("root"));
  