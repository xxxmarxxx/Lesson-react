class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageIsActive: false,
    };
    this.handlerMessageButton = this.handlerMessageButton.bind(this);
  }

  handlerMessageButton() {
    this.setState({
      messageIsActive: !this.state.messageIsActive,
    });
  }

  render() {
    console.log(this.state.messageIsActive);
    const text =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex itaque doloremque dolores ea impedit porro, quas placeat rem maiores modi iure nam quod, maxime enim nostrum quae quisquam odio quaerat?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex itaque doloremque dolores ea impedit porro, quas placeat rem maiores modi iure nam quod, maxime enim nostrum quae quisquam odio quaerat?";

    return (
      <>
        <h1>Pokaz i kryj - Lesson 12-13</h1>
        <button onClick={this.handlerMessageButton}>
          {this.state.messageIsActive ? "Ukryj" : "Pokaz"}
        </button>
        {/* {this.state.messageIsActive  ? <p>{text}</p> : null} */}
        {this.state.messageIsActive && <p className="textLorem">{text}</p>}
      </>
    );
  }
}

ReactDOM.render(<Message />, document.getElementById("root"));
//<p>{this.state.messageIsActive && text}</p>
