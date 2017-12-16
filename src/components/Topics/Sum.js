import React, { Component } from 'react'

export default class Sum extends Component {
    constructor() {
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    updateNum1(val) {
        this.setState({number1: val})
    }

    updateNum2(val) {
        this.setState({number2: val})
    }

    updateSum(num1, num2) {
        const num1AsInt = parseInt(num1, 10)
        const num2AsInt = parseInt(num2, 10)
        this.setState({ sum: num1AsInt + num2AsInt})
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input type="text" className="inputLine" onChange={(event) => this.updateNum1(event.target.value)}/>
                <input type="text" className="inputLine" onChange={(event) => this.updateNum2(event.target.value)}/>
                <button className="confirmationButton" onClick={() => this.updateSum(this.state.number1, this.state.number2)}></button>
                <span className="resultsBox">{`Sum: ${this.state.sum}`}</span>
            </div>
        )
    }
}

