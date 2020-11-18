import React from "react";
import "./App.css";
import Text from "./Text";

class App extends React.Component {
  state = {
      underline: false
  };
  render() {
      const text = "Witaj na stronie"
      let classes = "";
      if(this.state.underline) classes+=" line"
      if(text.length > 10) classes += " big"

    return (
      <div className="app" onClick={()=> this.setState({underline : !this.state.underline })}>
        <h1 className={classes}>{text}</h1>
        <Text />
      </div>
    );
  }
}

export default App;
