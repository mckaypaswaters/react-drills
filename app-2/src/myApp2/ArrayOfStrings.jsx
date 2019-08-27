import React, {Component} from 'react'

export default class ArrayOfStrings extends Component {
    constructor(){
        super()
        this.state = {
            names: ['McKay', 'Skylar', 'Brian', 'Felicia', 'Mark', 'Zach', 'Tate']}
    }
    render() {
        return (
            <div>
                <h2>{this.state.names[0]}</h2>
                <h2>{this.state.names[1]}</h2>
                <h2>{this.state.names[2]}</h2>
                <h2>{this.state.names[3]}</h2>
                <h2>{this.state.names[4]}</h2>
                <h2>{this.state.names[5]}</h2>
                <h2>{this.state.names[6]}</h2>
            </div>
        )
    }
}