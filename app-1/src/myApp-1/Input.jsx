import React, {Component} from 'react'

export default class Input extends Component {
    constructor() {
        super()
        this.state = {
          printedText: ''
        }   
      }
      printText(val) {
        this.setState({printedText: val})
      }
    render(){
        return (
        <div>
            <input className='inputBox' onChange={ (e) => this.printText(e.target.value)} />
            <h3>{this.state.printedText}</h3>
        </div>
        )
    }
}