import React from 'react';
import './App.css';


class App extends React.Component {
  state = {
    active: false
  }
  render() { 
    /////////////////// wersja 1
    // const btn_off = {
    //   border: '2px solid black',
    //   borderRadius: '10px',
    //   padding: '15.4px 32.1px 15px',
    //   fontSize: '30px',
    //   fontFamily: 'arial',
    //   display: 'block',
    //   margin: '20px auto',
    //   backgroundColor: '#fff'
    // }

    // const btn_on = {
    //   border: '2px solid black',
    //   borderRadius: '10px',
    //   padding: '15.4px 32.1px 15px',
    //   fontSize: '30px',
    //   fontFamily: 'arial',
    //   display: 'block',
    //   margin: '20px auto',
    //   backgroundColor: 'cadetblue',
    //   color: '#fff',
    // }
    
    // return ( 
    //   <div>
    // <button style={this.state.active ? btn_on : btn_off} onClick={()=> this.setState({ active: !this.state.active })}>{this.state.active ? "Wylacz" : "Wlacz"}</button>
    //   </div>
    //  );
    ////////////////
    //////////////// wersja 2 const style
    // const style = {
    //   btn_off: {
    //     border: '2px solid black',
    //     borderRadius: '10px',
    //     padding: '15.4px 32.1px 15px',
    //     fontSize: '30px',
    //     fontFamily: 'arial',
    //     display: 'block',
    //     margin: '20px auto',
    //     backgroundColor: '#fff'
    //   },
    //   btn_on: {
    //     border: '2px solid black',
    //     borderRadius: '10px',
    //     padding: '15.4px 32.1px 15px',
    //     fontSize: '30px',
    //     fontFamily: 'arial',
    //     display: 'block',
    //     margin: '20px auto',
    //     backgroundColor: 'cadetblue',
    //     color: '#fff'
    //   }
    // };

    // return ( 
    //   <div>
    // <button style={this.state.active ? style.btn_on : style.btn_off} onClick={()=> this.setState({ active: !this.state.active })}>{this.state.active ? "Wylacz" : "Wlacz"}</button>
    //   </div>
    //  );


    ////////////// wersja 3 let
  let btn = {
        border: '2px solid black',
        borderRadius: '10px',
        padding: '15.4px 32.1px 15px',
        fontSize: '30px',
        fontFamily: 'arial',
        display: 'block',
        margin: '20px auto',
        backgroundColor: '#fff'
  }
  if (this.state.active){
  btn.backgroundColor = 'cadetblue';
  btn.color = '#fff';
  }

return ( 
      <div>
    <button style={btn} onClick={()=> this.setState({ active: !this.state.active })}>{this.state.active ? "OFF" : "ON"}</button>
      </div>
     );

  }
}
 
export default App;
