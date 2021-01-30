import React, { Component } from 'react'

class Random extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
        this.randomNumber()
    }

    randomNumber() {
        setInterval(() => {
            let random = Math.floor(Math.random() * 100);
            this.setState({
                number: random
            })
        }, 1000);
    }
    render() {
        return (
            <div>
                <h2>Random number (1 - 100)</h2>
                <h1>{this.state.number}</h1>
            </div>
        )
    }
}
export default Random;