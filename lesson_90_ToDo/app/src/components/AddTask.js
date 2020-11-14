import React, { Component } from "react";

class AddTask extends Component {
  state = {
    minDate: new Date().toISOString().slice(0, 10),
    text: "",
    checked: false,
    date: this.minDate,
  };

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleClick = () => {
    console.log("dodaj");
    const { text, checked, date } = this.state;
    if(text.length > 2){
    const add = this.props.add(text, date, checked);
    if (add) {
      this.setState({
        text: "",
        checked: false,
        date: this.minDate,
      });
    }
    } else {
        // alert("za krotka nazwa")
        console.log("za krotko")
    }
  };

  render() {
    // const maxDate = this.minDate.slice(0, 4) * 1 + 1;
    let maxDate = this.state.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";

    return (
      <div className="form">
        <input
          type="text"
          placeholder="dodaj zadanie"
          value={this.state.text}
          onChange={this.handleText}
        />

        <input
          style={{ marginLeft: 10 }}
          type="checkbox"
          checked={this.state.checked}
          id="important"
          onChange={this.handleCheckbox}
        />

        <label style={{ margin: 10 }} htmlFor="important">
          Priorytet
        </label>
        <br />
        <br />
        <label style={{ margin: 10 }} htmlFor="date">
          Do kiedy zrobic
        </label>
        <input
          type="date"
          value={this.date}
          min={this.state.minDate}
          max={maxDate}
          onChange={this.handleDate}
        />
        <br />
        <button onClick={this.handleClick}>Dodaj</button>
      </div>
    );
  }
}

export default AddTask;
