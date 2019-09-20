import React, { Component } from "react";
import "./App.css";
import Todo from './Todo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todoArr: [],
      input: ''
    }
    this.add = this.add.bind(this)
  }

  handleChange(e){
    this.setState({input: e})
  }

  add(){
    this.setState({
      todoArr: [...this.state.todoArr, this.state.input],
      input: ''
    })
  }

  render() {
    let mappedArr = this.state.todoArr.map((element, index) => {
      return  <p>{element}</p>
    })

    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input value={this.state.input} onChange={(e) => this.handleChange(e.target.value)}type="text"/>
        <button onClick={this.add}>Add</button>
        <Todo
        todo={mappedArr}
        />
      </div>
    );
  }
}

export default App;
