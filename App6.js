const PositveMessage = () => <p>Mozesz ogladac film. Zapraszamy</p>;
const NegativeMessage = () => <p>Nie mozesz ogladac filmu jesli masz 16 lat!</p>;
class CheckBoxAgeConfirmation extends React.Component {
  state = {
    isConfirmed: false,
  };

  handleCheckBoxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
    });
  };

  displayMessage = () => {
    if (this.state.isConfirmed) {
      return <PositveMessage />;
    } else {
      return <NegativeMessage />;
    }
  };

  render() {
    console.log(this.state.isConfirmed);
    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <input
          type="checkbox"
          id="age"
          onChange={this.handleCheckBoxChange}
          checked={this.state.isConfirmed}
        />
        <label htmlFor="age">Mam co najmniej 16 lat</label>
        {this.displayMessage()}
      </>
    );
  }
}
ReactDOM.render(<CheckBoxAgeConfirmation />, document.getElementById("root"));
