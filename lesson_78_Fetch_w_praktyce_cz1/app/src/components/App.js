import React, { Component } from 'react';
import './App.css';
import Userslist from "./UsersList";
import ButtonFetchUsers from "./ButtonFetchUsers"

class App extends Component {
  state = {  }
  render() { 
    return ( 
<div className="App">
      <ButtonFetchUsers/>
      <UsersList/>
      </div>
     );
  }
}
 
export default App;

