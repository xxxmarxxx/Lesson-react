// Warunkowe dodanie przycisku i obsluga stanu magazynu (availableProducts)
// Wyszarzanie liczby = 0 CSS
// destrukturyzacja

class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 1,
  };

  handleRemoveFromCart = () => {
    this.setState({
        shoppingCart: this.state.shoppingCart - 1,
    });
  };

  handleAddToCart = () => {
    this.setState({
        shoppingCart: this.state.shoppingCart + 1,
    });
  };

  handleBuy =() => {
      this.setState({
          availableProducts: this.state.availableProducts - this.state.shoppingCart, shoppingCart:0,
      })
      console.log("kupione");
  }

  render() {
    const {shoppingCart, availableProducts} = this.state
    const {handleAddToCart, handleBuy, handleRemoveFromCart} = this
    const style = shoppingCart === 0 ? {opacity: 0.3} : {};

    return (
      <>
        <button disabled={shoppingCart ? false : true} onClick={handleRemoveFromCart}> - </button>

        <span style={style}> {shoppingCart} </span>

        <button disabled={shoppingCart === availableProducts ? true : false } onClick={handleAddToCart} > + </button>
        {shoppingCart > 0 && <button onClick={handleBuy}>kup</button>}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));