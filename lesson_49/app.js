// kantor walut


// wersja 1 dollar na 5.11.20
// const Dollars = (props)=> (
// <div>Wartosc w dolarach: <strong>{props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2)}</strong></div>
// )

//wersja 2 Euro na 5.11.20
// const Euros = (props)=> {
//         const value = props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2)
//         return (
//         <div>Wartosc w euro: <strong>{value}</strong></div>
//     )
// }
//wersja 3 chinska waluta na 5.11.20
// const Yuan = (props)=> {
//     const value = (props.cash / props.ratio).toFixed(2)
//     return (
//     <div>Wartosc w Yuan: <strong>{props.cash <= 0 ? "" : value}</strong></div>
// )
// }

const Cash = (props)=> (
<div> {props.title} <strong>{props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2)}</strong></div>
)



class ExchangeCounter extends React.Component {
  state = {
        amount: "",
        ratioDollar: 3.81,
        ratioEuro: 4.52,
        ratioYuan: 0.58,

  };

  handleChange = (e) => {
      this.setState({
          amount: e.target.value
      })
  }

  render() {

    const {amount, ratioDollar, ratioEuro, ratioYuan} = this.state;
    // destrukturyzacja
    return (
      <>
        <div className="app">
          <h3 className="title">Witaj na lekcji 49 cz.1 Kantor walut</h3>

          <h2 className="">Kantor Walut</h2>
          <label>
            <input 
            type="number" 
            value={amount} 
            onChange={this.handleChange}
            />
          </label>
          <div className="cash">
              
          {/* <Dollars cash={amount} ratio={ratioDollar}/> */}
          {/* <Euros cash={amount}ratio={ratioEuro}/> */}
          {/* <Yuan cash={amount}ratio={ratioYuan}/> */}

          {/* <Cash cash={amount} ratio={ratioDollar} title="Wartosc w dollarach:"/>
          <Cash cash={amount} ratio={ratioEuro} title="Wartosc w Euro:"/>
          <Cash cash={amount} ratio={ratioYuan} title="Wartosc w Yuan:"/> */}

          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
