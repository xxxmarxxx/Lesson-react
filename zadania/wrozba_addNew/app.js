// jeden komoponet
// wersja na 5 - zobacz wrozbe, lisuj jedna z trzech wrozb
// wersja na 6 - dodaj do trech istniejacych wrozb kolejna
class Draw extends React.Component {
  state = {
    options: [" 1: hallo world", " 2: czesc", " 3: dziendoberek", " 4: witam"],
    option: null,
    value: null,
  };
// losujemy liczbe badz text z tablicy przez Math.floor und Math.random
// przypisuje do option poprzez this.setState 
  handleShowOption = () => {
    const index = Math.floor(Math.random() * this.state.options.length);
    this.setState({
      option: this.state.options[index],
    });
  };
// wyciagamy cos z value
    handleIputChange = e => {
      this.setState({
        value: e.target.value,
      })
    }
// robimy kopie tablicy ... i pracujemy na kopie
    handleAddOption = ()=> {
      if(this.state.value === "") return alert('wpisz cos!')
      // --- wersja z ...  i kopjujemy tablice
      
      // options.push(this.state.value);
      // const options = [...this.state.options]

      // --- mozna tez za pomoca concat()
      const options = this.state.options.concat(this.state.value)
      
       this.setState({
         options,
         value: '',
       })
       alert(`wrozba dodana. aktualne: ${options}`)
    }


  render() {
    return (
      <div className="wrapper">
        <button onClick={this.handleShowOption}>Zobacz co wywruzyles</button>
        <br />
        <input type="text" value={this.state.value} onChange={this.handleIputChange}/>
        <button onClick={this.handleAddOption}>Dodaj wrozbe</button>
        {/* // wyswietla sie tylko wtedy kiedy jest true button klikniety jak nie to niema nic */}
        {this.state.option ? <h1>{this.state.option}</h1> : null}
      </div>
    );
  }
}

ReactDOM.render(<Draw />, document.getElementById("root"));
