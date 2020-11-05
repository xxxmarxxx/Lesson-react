// import React from "./przycisk";

class Form extends React.Component {
  state = {
    city: "London",
    text: "",
    isLoved: true,
    number: "0"
   }

handleCityChange = (e) => {
  this.setState({
    city: e.target.value,
  })
}
handleTextChange = (e) => {
  this.setState({
    text: e.target.value,
    
  })
}

handleIsLovedChange = (e) => {
  this.setState({
isLoved: e.target.checked,
  })
}

handleVisitNumberChange (e) {
  this.setState({
number: e.target.value,
  })
}

  render() {
    return (
      <>
      <h3 className="title">
          Witaj na lekcji 47 cz.1 komponent kontrolowany i niekontrolowany
        </h3>
        <label>
          Podaj miasto
          <input value={this.state.city} onChange={this.handleCityChange} type="text"/>
        </label>
        <br/>
        <label>
          Napisz mi cos o tym miescie
          <textarea value={this.state.text} onChange={this.handleTextChange} type="text"/>
        </label>
        <br/>
        <label>
          czy lubisz to miasto?
          <input type="checkbox" checked={this.state.isLoved}
          onChange={this.handleIsLovedChange} />
        </label>
        <br/>
        <label>
          Ile razy byliscie w tym miescie?
          <select value={this.state.number} onChange={this.handleVisitNumberChange.bind(this)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="more">wiecej</option>
          </select>
        </label>
      
      </>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
