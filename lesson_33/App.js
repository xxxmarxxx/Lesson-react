// Jeden komponent z dwoma roznymi textami
// Destrukturyzacja
// funkcja poza komponentem

const ValidationMessage = (props) => {
  const { txt } = props;
  return <p>{txt}</p>;
};

const OrderForm = (props) => {
  const {submit, change, isConfirmed} = props;
  return (
    <form onSubmit={submit}>
      <input
        type="checkbox"
        id="age"
        onChange={change}
        checked={isConfirmed}
      />
      <label htmlFor="age">Mam co najmniej 16 lat</label>
      <button type="submit">Kup bilet</button>
    </form>
  );
};
class Ticketshop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false,
  };

  handleCheckBoxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true,
      });
    }
  };

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <ValidationMessage txt="Mozesz ogladac film. Zapraszamy" />;
      } else {
        return (
          <ValidationMessage txt="Nie mozesz ogladac filmu jesli nie masz 16 lat!" />
        );
      }
    } else {
      return null;
    }
  };

  render() {
    const { isConfirmed, isFormSubmitted } = this.state;

    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <OrderForm
          change={this.handleCheckBoxChange}
          submit={this.handleFormSubmit}
          checked={isConfirmed}
        />
        {this.displayMessage()}
      </>
    );
  }
}
ReactDOM.render(<Ticketshop />, document.getElementById("root"));
