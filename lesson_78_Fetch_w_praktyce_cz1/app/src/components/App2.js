import React, { Component } from "react";
import "./App.css";
import UsersList from "./UsersList2";
import ButtonFetchUsers from "./ButtonFetchUsers2";

const API = "https://randomuser.me/api/?results=1";

class App extends Component {
  state = {
    users: [],
  };
  handleDataFetch = () => {
    // console.log("click");
    fetch(API)
    .then(response => {
      if(response.ok) {
        return response
      }
      throw Error("Blad!!!!")
    })
    .then(response =>response.json())
    .then(data => {
      const user = data.results;
      this.setState(prevState => ({
        users: prevState.users.concat(user)
      }))
    })
    .catch(error => console.log(error))
  }
  render() {

    const users = this.state.users;
    return (
      <div className="App">
        <h1>Lesson 78 no.2 Fetch in practice</h1>
        <ButtonFetchUsers click={this.handleDataFetch}/>
        {users.length > 0 ? <UsersList users={users}/> : users}
      </div>
    );
  }
}

export default App;
