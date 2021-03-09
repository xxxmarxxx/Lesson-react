// class New extends React.Component {

//     state= {
//         options: ["1","2","3"],
//         option: null,
//     }
//     handleShowOption = () => {
//         const index = Math.floor(Math.random() * this.state.options.length);
//         this.setState({
//             option: this.state.options[index],
//         })
//     }

//     render(){
//         return(
//             <>
//     <button onClick={this.handleShowOption}>Pokaz</button>
//         {this.state.option ? <h1>{this.state.option}</h1>
//         : null }
//             </>
//         )
//     }

// }
// ReactDOM.render(<New />, document.getElementById('root'))

class New extends React.Component {
  state = {
    options: ["33", "55", "77"],
    option: null,
  };

  handleShowOption = () => {
    const blala = Math.floor(Math.random() * this.state.options.length);
    this.setState({
        option: this.state.options[blala]
    })
  };

  render() {
    return (
      <>
        <button onClick={this.handleShowOption}>zobacz co ju tu mamm</button>
        {this.state.options ? <h1>{this.state.option}</h1> : null}
      </>
    );
  }
}

ReactDOM.render(<New />, document.getElementById("root"));
