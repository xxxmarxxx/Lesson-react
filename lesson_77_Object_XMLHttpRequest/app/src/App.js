import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.onload = () => {
      console.log(xhr.status);
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.response);
        console.log(users);
        this.setState({ users });
      }
      // console.log(typeof xhr.response);
    };
    xhr.send(null);
  }

  render() {
    const users = this.state.users.map((user) => (
      <div className="users" key={user.id}>
        <h4>{user.name}</h4>
        <p>
          <i>Username: </i>
          {user.username}
        </p>
        <p>
          <i>Email: </i>
          {user.email}
        </p>
        <p>
          <i>City: </i>
          {user.address.city}
        </p>
      </div>
    ));
    return (
      <div>
        <h1>Lesson 77 XML Http Request</h1>
        <div className="App">{users}</div>
      </div>
    );
  }
}

export default App;
