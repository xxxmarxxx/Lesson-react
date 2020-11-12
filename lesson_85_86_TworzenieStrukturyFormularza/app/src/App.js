import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: "",
    pass: "",
    accept: false,

    errors: {
      username: true,
      email: true,
      pass: true,
      accept: true,
    }
  };

  messages = {
    username_incorrect: '- Imie ma miec 10 liter!',
    email_incorrect: '- Brak @ w emailu!',
    pass_incorrect: '- Haslo musi miec 8 znakow!',
    accept_incorrect: '- Nie ma potwierdzenia zgody !'
  }

  handleChange = (e) => {
    // console.log(e.target.type);
    // console.log(e.target.name);
    const name = e.target.name;
    const type = e.target.type;
    if(type === "text" || type === "password" || type === "email") {
      const value = e.target.value;
      // const checked = e.target.checked;
      this.setState({
        [name]: value,
      });
    } else if(type === "checkbox") {
      const checked = e.target.checked;
      console.log(checked);
      this.setState({
      [name]: checked,
    });
    // console.log(type);
  };
}

  handelSubmit = (e)=> {
    e.preventDefault()
    console.log("dziala");
  }

  render() {
    return (
      <>
        <h1>Lesson 85/86/87/88 Formularz z validation</h1>
        <div className="App">
          <form onSubmit={this.handelSubmit} noValidate>
            <label htmlFor="user">
              Podaj imie:
              <input
                type="text"
                id="user"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              {this.state.errors.username && <span>
              {this.messages.username_incorrect}</span>}
              </label>
              <label htmlFor="email">
                Podaj email:
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                {this.state.errors.email && <span>
                {this.messages.email_incorrect}</span>}
              </label>
            <label htmlFor="password">
              Podaj haslo:
              <input
                type="password"
                id="password"
                name="pass"
                value={this.state.pass}
                onChange={this.handleChange}
              />
              {this.state.errors.pass && <span>
              {this.messages.pass_incorrect}</span>}
            </label>
            <label htmlFor="accept">
            <input 
            type="checkbox" 
            id="accept" 
            name="accept" 
            checked={this.state.accept} 
            onChange={this.handleChange}
            /> 
            Wyrazam zgode
            {this.state.errors.accept && <span>
            {this.messages.accept_incorrect}</span>}
            </label>
            <button>Zapisz sie</button>
          </form>
        </div>
      </>
    );
  }
}

export default App;
