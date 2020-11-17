import React from "react";
import '../styles/ContactPage.css';
import {Prompt} from 'react-router-dom'

class ConctactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
        value: ""
    })
  };
  
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Napisz do nas</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="wpisz wiadomosc"
          ></textarea>
          <button>Wyslij</button>
        </form>
        <Prompt
        when={this.state.value}
        message="masz nie wypelniony formularz, czy chcesz opuscic te strone" />
      </div>
    );
  }
}

export default ConctactPage;
