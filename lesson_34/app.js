// Warunkowe dodanie przycisku i obsluga stanu magazynu (availableProducts)
// Wyszarzanie liczby = 0 CSS
// destrukturyzacja

class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 5,
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

  render() {
    return (
      <>
        <button disabled={this.state.shoppingCart ? false : true} onClick={this.handleRemoveFromCart}> - </button>
        <span> {this.state.shoppingCart} </span>
        <button disabled={this.state.shoppingCart === this.state.availableProducts ? true : false } onClick={this.handleAddToCart} > + </button>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
