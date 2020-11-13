import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: 'zagrac w pilke',
        date: '2020-12-15',
        important: true,
        active: true,
        finishDate: null
      },
      {id: 1,
        text: 'polmalowac pokoj',
        date: '2020-12-20',
        important: true,
        active: true,
        finishDate: null
      },
      {id: 2,
        text: 'namalowac obraz',
        date: '2021-01-20',
        important: false,
        active: true,
        finishDate: null
      },
      {id: 3,
        text: 'zrobic backup',
        date: '2020-12-10',
        important: true,
        active: true,
        finishDate: null
      },
      {id: 4,
        text: 'nauczyc sie aquarelowac',
        date: '2021-01-20',
        important: false,
        active: true,
        finishDate: null
      },
      {id: 5,
        text: 'kupic chleb ',
        date: '2020-11-14',
        important: true,
        active: true,
        finishDate: null
      },
    ]
  };

  deleteTask = (id) => {
      console.log('delete elementu o id' + id)
  }
  changeTaskStatus = (id) => {
    console.log('change w stanie elementu o id' + id)
  }

  render() {
    return (
      <div className="App">
        <h1>Lesson 90/91/92 - ToDo App</h1>
        <AddTask />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask}
        change={this.changeTaskStatus}/>
      </div>
    );
  }
}

export default App;
