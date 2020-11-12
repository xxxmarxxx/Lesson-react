import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    username: "",
  };

  render() {
    return (
      <>
      <h1>Lesson 85-86 Formularz z validation</h1>
    <div className="App">
      <form>
        <label htmlFor="user"> Twoje imie: 
          <input type="text" id="user" name="username" value={this.state.username}
          onChange={this.handleChange}/>
        </label>
      </form>
      </div>
</>
  )
}
}

export default App;
