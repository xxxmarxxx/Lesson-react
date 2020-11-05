// kantor walut

const Dollars = ()=> (
    
    <div>Wartosc w dolarach:</div>
)

const Euros = ()=> (
    <div>Wartosc w euro:</div>
)

class ExchangeCounter extends React.Component {
  state = {
        amount: ""
  };
  
  render() {
    return (
      <>
        <div className="app">
          <h3 className="title">Witaj na lekcji 49 cz.1 Kantor walut</h3>

          <h2 className="">Kantor</h2>
          <label>
            <input type="number" />
          </label>
          <Dollars />
          <Euros />
        </div>
      </>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
