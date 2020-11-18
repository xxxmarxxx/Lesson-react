import React from 'react';
import './App.css';


class App extends React.Component {
  state = {
    active: false
  }
  render() { 

    const btn_off = {
      border: '2px solid black',
      padding: '15.4px 32.1px 15px',
      fontFamily: 'arial',
      display: 'block',
      margin: '20px auto',
      backgroundColor: '#fff'
    }
    
    return ( 
      <div>
    <button style={btn_off} onClick={()=> this.setState({ active: !this.state.active })}>{this.state.active ? "Wylacz" : "Wlacz"}</button>
      </div>
     );
  }
}
 
export default App;
