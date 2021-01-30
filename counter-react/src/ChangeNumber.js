import React, { Component } from 'react'

class ChangeNumber extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }

    increase = () => {
        this.setState({ number: this.state.number + 1 })
    }
    decrease = () => {
        this.setState({ number: this.state.number - 1 })
    }
    render() {
        return (
            <div>
                <h2>Number: {this.state.number}</h2>
                <button onClick = {this.increase} className="btn-green" type="button">Increase</button>
                <button onClick = {this.decrease} className="btn-red" type="button">Decrease</button>
            </div>
        )
    }
}
export default ChangeNumber;