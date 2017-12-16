import React, {Component} from 'react'

export default class EvenAndOdd extends Component {
    constructor() {
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
        // this.updateUserInput = this.updateUserInput.bind(this)
        // this.doCoolStuff = this.doCoolStuff.bind(this)
    }

    updateUserInput(val) {
        this.setState({
            userInput: val
        })
    }

    doCoolStuff(userInputString) {

        let evens = [];
        let odds = [];

        const arrayOfInts = userInputString.split(",")
        
        for (var i in arrayOfInts) {
            const numAsInt = parseInt(arrayOfInts[i], 10) /*+arrayOfInts[i]*/
            console.log(numAsInt)
            if (numAsInt % 2 === 0) {
                evens.push(numAsInt)
            } else {
                odds.push(numAsInt)
            }
        }

        this.setState({

            evenArray: evens,
            oddArray: odds
        })
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>"Evens and Odds"</h4>
                <input type="text" className="inputLine" onChange={(event) => this.updateUserInput(event.target.value)}/>
                <button className="confirmationButton" onClick={() => this.doCoolStuff(this.state.userInput)}></button>
                <span className="resultsBox">Evens: [{this.state.evenArray.join(", ")}]</span>
                <span className="resultsBox">Odds: [{this.state.oddArray.join(", ")}]</span>
            </div>
        )
    }
}

