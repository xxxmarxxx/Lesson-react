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
        important: false,
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
    // metoda 1
      // console.log('delete elementu o id' + id);
      // const tasks = [...this.state.tasks];
      // // console.log(tasks);
      // const index = tasks.findIndex(task => task.id === id);
      // // console.log(index);
      // tasks.splice(index, 1);
      // // console.log(tasks);
      // this.setState({
      //   tasks
      // })

    let tasks = [...this.state.tasks];
    // console.log(tasks)
    tasks = tasks.filter(task => task.id !== id)
    // console.log(tasks)
    this.setState({
        tasks
      })

  }
  changeTaskStatus = (id) => {
    console.log('change w stanie elementu o id' + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if(task.id === id){
          task.active = false;
          task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })

  }

  render() {
    return (
      <div className="App">
        <h1>Lesson 90-98 - ToDo App</h1>
        <h2 style={{margin: 20}}>ToDo APP</h2>
        <AddTask />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask}
        change={this.changeTaskStatus}/>
      </div>
    );
  }
}

export default App;
