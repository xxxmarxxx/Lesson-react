class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      number: 0,
     }
    console.log("Wywolaj metode constructor");
  }
  // componentWillMount(){
  //   console.log("Wywolana componentWillMount");
  // }
  componentDidMount(){
    console.log("Wywolana componentDidMount");
    this.setState({
      number: 1,
    })
  }
  componentDidUpdate(){
    console.log("Wywolana componentDidUpadate");
  }
  render() { 
    console.log("Wywolana metoda render");
    return ( 
      <>
     <h1>Lesson 62 - Cykl zycia </h1>
      <p>lifecycle - montowanie komponetuu</p>
      <Child />
        
     </>
     );
  }
}

class Child extends React.Component {
  componentDidMount(){
    console.log(`
    -----------------------
    Wywolana componentDidMount w koponencie Child`);
  }
  render(){
    console.log("wywolana metoda render w komponcie Child");
    return(
      <h1>Dziecko</h1>
    )
  }

}

ReactDOM.render(<App />, document.getElementById("root"));
