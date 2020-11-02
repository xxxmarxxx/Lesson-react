// import React from "./przycisk";


class Header extends React.Component {
    state = {
      counter: 0,
    };
    render() {
      return (
        <>
        <h2>Shopping List</h2>
          <h3>
            <a href="#">Lesson 11 </a>
          </h3>
        </>
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
            <ItemsList name={this.state.items3} example={ 1 * 2 } />
          </ul>
        </>
      );
    }
  }

  class ItemsList extends React.Component {
    render() {
      return (
        <li>{this.props.name} - {this.props.example} </li>
      )
    }
  
    }


    class Footer extends React.Component {
      state = {};
      render() {
        return (
          <section className="stopka">
            <h3>I'm Footer</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
          </section>
        );
      }
    }

  
  const App = () => {
    return (
      <div>
        <Header />
        <ShoppingList />
        <Footer />
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById("root"));