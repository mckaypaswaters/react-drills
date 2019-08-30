import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      games: ['Legend of Zelda', 'Call of Duty', 'Borderlands', 'Bioshock'],
      filter: ''
    }
  }

  handleChange(e){
    this.setState({
      filter: e.target.value
    })
  }

  render(){

    let games = this.state.games.filter(element => {
      if(element.includes(this.state.filter)){
        return true
      }
    }).map((element, index) => {
      return <li key={index}>{element}</li>
    })

    return (
      <div className='App'>
        <input onChange={e => this.handleChange(e)}/>
        <ul>
        {games}
        </ul>
      </div>
    )
  }
}

export default App;
