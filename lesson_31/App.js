const PositveMessage = () => <p>Mozesz ogladac film. Zapraszamy</p>;
const NegativeMessage = () => (
  <p className="negative">Nie mozesz ogladac filmu jesli masz 16 lat!</p>
);
class Ticketshop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false,
  };

  handleCheckBoxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault()
    if(!this.state.isFormSubmitted) {
    this.setState ({
      isFormSubmitted: true
    })
  }
  }

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <PositveMessage />;
      } else {
        return <NegativeMessage />;
      }
    } else {return null}
  };

  render() {
    // console.log(this.state.isConfirmed);
    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="checkbox"
            id="age"
            onChange={this.handleCheckBoxChange}
            checked={this.state.isConfirmed}
          />
          <label htmlFor="age">Mam co najmniej 16 lat</label>
          <button type="submit">Kup bilet</button>
        </form>
        {this.displayMessage()}
      </>
    );
  }
}
ReactDOM.render(<Ticketshop />, document.getElementById("root"));
