// import React from "./przycisk";

class Form extends React.Component {
  render() {
    return (
      <>
      <h3 className="title">
          Witaj na lekcji 47 komponent kontrolowany i niekontrolowany
        </h3>
      <form>
        
        <label>
          Podaj imie:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Podaj email:
          <input type="email" name="email" />
        </label>
        <br />
        <button>Zapisz sie</button>
      </form>
      </>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
