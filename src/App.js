import React, { Component } from 'react';
import './App.css';
import nanoid from 'nanoid';
import AddTaskForm from "./Components/AddTaskForm/AddTaskForm";
import Task from "./Components/Task/Task";

class App extends Component {

  state = {
    task: '',
    tasks: [
      {text: 'Buy milk', id: nanoid()},
      {text: 'Walk with dog', id: nanoid()},
      {text: 'Do homework', id: nanoid()},
    ],
  };

  createTask = () => {
    let tasks = [...this.state.tasks];
    let text = this.state.task;
    let task = {text, id: nanoid()};
    tasks.push(task);
    this.setState({tasks});
  };

  del = (taskId) => {
    let tasks = [...this.state.tasks];
    let id = tasks.findIndex(t => t.id === taskId);
    tasks.splice(id, 1);
    this.setState({tasks});
  };

  reversal = (event) => {
    let task = event.target.value;
    this.setState({task});
  }

  render() {
    return(
        <div className='App'>
          <AddTaskForm
              value = {this.state.task}
              change = {(event) => this.reversal(event)}
              add = {this.createTask}
          />
          {this.state.tasks.map(task => (
              <Task
                  text={task.text}
                  del={() =>this.del(task.id)}
                  key={task.id}
              />
          ))}
        </div>
    )
  }
}

export default App;