import React, { Component } from 'react'

export default class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            unfilteredArray: ["Aaron", "Ammon", "Elam", "Erica", "Eliza", "Andre"],
            userInput: "",
            filteredArray: []
        }
    }

    handelUserInputChange(val) {
        this.setState({ userInput: val })
    }

    performMagic() {
        const matches = []
        for (var i in this.state.unfilteredArray) {
            if (this.state.unfilteredArray[i].includes(this.state.userInput)) {
                matches.push(this.state.unfilteredArray[i])
            }
        }

        this.setState({
            filteredArray: matches
        })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{`Unfiltered Names: ${this.state.unfilteredArray} `}</span>
                <input type="text" className="inputLine" onChange={(event) => this.handelUserInputChange(event.target.value) }/>
                    <button className="confirmationButton" onClick={() => this.performMagic()}></button>
                    <span className="resultsBox filterStringRB">{`Filtered Names: ${JSON.stringify(this.state.filteredArray)}`}</span>
            </div>
        )
    }
}
