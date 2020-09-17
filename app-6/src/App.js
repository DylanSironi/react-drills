import React, { Component } from 'react';
import './App.css';
import Todo from './Todo'
class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      box: "",
    };
    this.addItem = this.addItem.bind(this)
  }
  func1(value) {
    this.setState({ box: value });
  }
  addItem() {
    this.setState({
      list: [...this.state.list, this.state.box],
      box: ""
    });
  }
  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />;
    });
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <div>
          <box
            value={this.state.box}
            placeholder="Enter new task"
            onChange={e => this.func1(e.target.value)}
          />
          <button onClick={this.addItem}>Add</button>
        </div>
        <br />
        {list}
      </div>
    );
  }
}
export default App;
