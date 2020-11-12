import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: "",
    pass: "",
    accept: false,
    message: "",

    errors: {
      username: false,
      email: false,
      pass: false,
      accept: false,
    },
  };

  messages = {
    username_incorrect: "- Imie ma miec 10 liter!",
    email_incorrect: "- Brak @ w emailu!",
    pass_incorrect: "- Haslo musi miec 8 znakow!",
    accept_incorrect: "- Nie ma potwierdzenia zgody !",
  };

  handleChange = (e) => {
    // console.log(e.target.type);
    // console.log(e.target.name);
    const name = e.target.name;
    const type = e.target.type;
    if (type === "text" || type === "password" || type === "email") {
      const value = e.target.value;
      // const checked = e.target.checked;
      this.setState({
        [name]: value,
      });
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      console.log(checked);
      this.setState({
        [name]: checked,
      });
      // console.log(type);
    }
  };

  handelSubmit = (e) => {
    e.preventDefault();

    const validation = this.formValidation();
    // console.log(validation);

    // console.log("dziala");
    if (validation.correct) {
      this.setState({
        username: "",
        email: "",
        pass: "",
        accept: false,
        message: 'Forlmurz zostal wyslany',

        errors: {
          username: false,
          email: false,
          pass: false,
          accept: false,
        },
      });
      // console.log("Formularz WYSLANY");
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          pass: !validation.pass,
          accept: !validation.accept,
        },
      });
    }
  };
  // validation
  formValidation = () => {
    let username = false;
    let email = false;
    let pass = false;
    let accept = false;
    let correct = false;

    if (
      this.state.username.length > 10 &&
      this.state.username.indexOf(" ") === -1
    ) {
      username = true;
    }
    if (this.state.email.indexOf("@") !== -1) {
      email = true;
    }
    if (this.state.pass.length === 8) {
      pass = true;
    }
    if (this.state.accept) {
      accept = true;
    }
    if (username && email && pass && accept) {
      correct = true;
    }
    return {
      correct,
      username,
      email,
      pass,
      accept,
    };
  };

  componentDidUpdate(){
    console.log('update');
    if(this.state.message !== '') {
      setTimeout(()=> this.setState({
        message: ''
      }),3000)
    }
  }

  render() {
    return (
      <>
        <h1>Lesson <strong>85/86/87/88/89</strong> Formularz z validation</h1>
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
              {this.state.errors.username && (
                <span>{this.messages.username_incorrect}</span>
              )}
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
              {this.state.errors.email && (
                <span>{this.messages.email_incorrect}</span>
              )}
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
              {this.state.errors.pass && (
                <span>{this.messages.pass_incorrect}</span>
              )}
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
              {this.state.errors.accept && (
                <span>{this.messages.accept_incorrect}</span>
              )}
            </label>
            <button>Zapisz sie</button>
          </form>
              {this.state.message && <h3>{this.state.message}</h3>}
        </div>
      </>
    );
  }
}

export default App;
