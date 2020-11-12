import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: "",
  };

  handleChange = (e) => {
    console.log(e.target.type);
    console.log(e.target.name);
    const name = e.target.name
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <h1>Lesson 85-86 Formularz z validation</h1>
        <div className="App">
          <form>
            <label htmlFor="user">
              Twoje imie:
              <input
                type="text"
                id="user"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <label htmlFor="email">
                Twoj adress email:
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </label>
            </label>
            <label htmlFor="user">
              Twoje imie:
              <input
                type="text"
                id="user"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </label>
          </form>
        </div>
      </>
    );
  }
}

export default App;
