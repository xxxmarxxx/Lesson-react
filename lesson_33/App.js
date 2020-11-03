// Jeden komponent z dwoma roznymi textami
// Destrukturyzacja
// funkcja poza komponentem

const displayMessage = (isConfirmed, isFormSubmitted) => {
    if (isFormSubmitted) {
      if (isConfirmed) {
        return <ValidationMessage txt="Mozesz ogladac film. Zapraszamy" />;
      } else {
        return <ValidationMessage txt="Nie mozesz ogladac filmu jesli masz 16 lat!"/>;
      }
    } else {return null}
  };

const ValidationMessage = (props) => {
    const {txt} = props
    return (
        <p>{txt}</p>
    )
}
// const PositveMessage = () => <p className="positive">Mozesz ogladac film. Zapraszamy</p>;
// const NegativeMessage = () => (
//   <p className="negative">Nie mozesz ogladac filmu jesli masz 16 lat!</p>
// );

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

//   displayMessage = () => {
//     if (this.state.isFormSubmitted) {
//       if (this.state.isConfirmed) {
//         return <ValidationMessage txt="Mozesz ogladac film. Zapraszamy" />;
//       } else {
//         return <ValidationMessage txt="Nie mozesz ogladac filmu jesli masz 16 lat!"/>;
//       }
//     } else {return null}
//   };


  render() {
    const { isConfirmed, isFormSubmitted } = this.state
    console.log(isConfirmed);
    
    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="checkbox"
            id="age"
            onChange={this.handleCheckBoxChange}
            checked={isConfirmed}/>
          <label htmlFor="age">Mam co najmniej 16 lat</label>
          <button type="submit">Kup bilet</button>
        </form>
        {displayMessage(isConfirmed, isFormSubmitted)}
      </>
    );
  }
}
ReactDOM.render(<Ticketshop />, document.getElementById("root"));
