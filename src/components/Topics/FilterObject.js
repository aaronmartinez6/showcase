import React, {Component} from 'react'

export default class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
            unfilteredArray: [{name: "Aaron", age: 32}, {name: "Andrew", nickname: "Buddy", birthYear: 1985}, {nombre: "Nacho", vocacion: "Luchador"}],
            userInput: "",
            filteredArray: []
        }
    }

    updateUserInput(val) {
        this.setState({
            userInput: val
        })
    }

    filterArray() {
        const userInputString = this.state.userInput
        console.log(userInputString)
        const arrayOfMatches = this.state.unfilteredArray.filter( (val, index, arr) => val[userInputString] != null)
        console.log(arrayOfMatches)
        // for (var i in this.state.unfilteredArray) {
        //     for (j in this.state.unfilteredArray[i]) {
                
        //     }
        // }
        // console.log(userInputString)
        this.setState({
            filteredArray: arrayOfMatches
        })
    }
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input type="text" className="inputLine" onChange={(event) => this.updateUserInput(event.target.value)}/>
                <button className="confirmationButton" onClick={() => this.filterArray()}></button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}
