// jeden komoponet
// wersja na 5 - zobacz wrozbe, lisuj jedna z trzech wrozb
// wersja na 6 - dodaj do trech istniejacych wrozb kolena
class Draw extends React.Component {
  state = {
    options: [" 1: hallo world", " 2: czesc", " 3: dziendoberek", " 4: witam"],
    option: null,
  };

  handleShowOption = () => {
    const index = Math.floor(Math.random() * this.state.options.length);
    this.setState({
      option: this.state.options[index],
    });
  };
  render() {
    return (
      <div className="wrapper">
        <button onClick={this.handleShowOption}>Zobacz co mam!</button>
        <br />
        {this.state.option ? <h1>{this.state.option}</h1> : null}
      </div>
    );
  }
}

ReactDOM.render(<Draw />, document.getElementById("root"));
