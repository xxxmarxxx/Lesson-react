// import React from "./przycisk";


class Header extends React.Component {
  state = {
    counter: 0,
  };
  render() {
    return (
      <>
        <h1>
          <a href="#">Witam na mojej stroonie</a>
        </h1>
      </>
    );
  }
}

class Article extends React.Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <section>
        <h3>Artykul</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          error quidem rem ad modi corrupti eum consectetur asperiores qui, a
          itaque maxime totam laudantium nostrum amet harum exercitationem,
          provident ex.
        </p>
      </section>
    );
  }
}
class Footer extends React.Component {
  state = {};
  render() {
    return (
      <section className="stopka">
        <h3>Footer</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
      </section>
    );
  }
}


class ShoppingList extends React.Component {
  state = {
    items1: "ogorki",
    items2: "sok",
    items3: "cos do picia",
  };

  render() {
    return (
      <>
        <h1>Lista zakupow</h1>
        <ul>
          <ItemsList name={this.state.items1} example={ 2 + 2 } />
          <ItemsList name={this.state.items2} example={ 1 + 2 } />
          <ItemsList name={this.state.items3} example={ 4 + 2 } />
        </ul>
      </>
    );
  }
}

// const ItemsList = (props) => {
//   return (
//     <li>{props.name} - {props.example} </li>
//   )
// }

class ItemsList extends React.Component {
  render() {
    return (
      <li>{this.props.name} - {this.props.example} </li>
    )
  }

  }

const App = () => {
  return (
    <div>
      <Header />
      <Article />
      <ShoppingList />
      {/* <List /> */}
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
