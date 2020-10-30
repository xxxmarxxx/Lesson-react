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
          <MathButton 
          name="-10" 
          number="10" 
          type="subtraction" 
          click={this.handlerMathClick}
          />
          <h1>Liczba klickniec: {this.state.count}</h1>
          <h1>Wynik: {this.state.result}</h1>
        </>
      );
    }
  }
  const startValue = 0;
  ReactDOM.render(<Counter result={startValue}/>, document.getElementById("root"));
  