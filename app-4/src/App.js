import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      input1: '',
      input2: '',
    }
  }
  handleChange1(val){
    this.setState({input1: val})
  }
  handleChange2(val){
    this.setState({input2: val})
  }
  alertButton(){
    alert(`Username: ${this.state.input1} Password: ${this.state.input2}`)
  }


  render() {
    return (
      <div className="App">
        <input className='username' onChange={e => this.handleChange1(e.target.value)}></input>
        <input className='password' onChange={e => this.handleChange2(e.target.value)}></input>
        <button className='login-button' onClick={() => this.alertButton()}>Login</button>
      </div>
    );
  }
}

export default App;
