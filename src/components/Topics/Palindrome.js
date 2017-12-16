import React, { Component } from 'react'

export default class Palindrome extends Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
            palindrome: ""
        }
    }

    handleUserInputChange(val) {
        this.setState({userInput: val})
    }

    updatePalindrome(userInput) {
        let forwards = userInput
        let reversed = userInput.split("")
        reversed = reversed.reverse()
        reversed = reversed.join("")
        console.log(forwards)
        console.log(reversed)

        let pali = ""
        if (forwards == reversed) {
            pali = "true"
        } else {
            pali = "false"
        }
        this.setState({
            palindrome: pali 
        })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input type="text" className="inputLine" onChange={(event) => this.handleUserInputChange(event.target.value)}/>
                <button className="confirmationButton" onClick={() => this.updatePalindrome(this.state.userInput)}></button>
                <span className="resultsBox">{`Palindrome: ${this.state.palindrome}`}</span>
            </div>
        )
    }
}

