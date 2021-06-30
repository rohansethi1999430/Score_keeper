import React, { Component } from 'react'

class Score_keeper extends Component {
    constructor(props) {
        super(props);
        this.state = { score: 0 }
        this.singleKill = this.singleKill.bind(this);
        this.tripleKill = this.tripleKill.bind(this);
    }
    singleKill() {
        this.setState({ score: this.state.score + 1 })
    }
    // tripleKill() {
    //     this.setState({ score: this.state.score + 1 })
    //     this.setState({ score: this.state.score + 1 })
    //     this.setState({ score: this.state.score + 1 })
    // }

    // tripleKill() {
    //     this.setState(st => {
    //         return { score: st.score + 1 }
    //     })
    //     this.setState(st => {
    //         return { score: st.score + 1 }
    //     })
    //     this.setState(st => {
    //         return { score: st.score + 1 }
    //     })
    // }

    increamentScore(currState) {
        return { score: currState.score + 1 };
    }

    tripleKill() {
        this.setState(this.increamentScore);
        this.setState(this.increamentScore);
        this.setState(this.increamentScore);
    }
    render() {
        return (
            <div>
                <h1>
                    Score is: {this.state.score}
                </h1>
                <button onClick={this.singleKill}>Single Kill !!</button>
                <button onClick={this.tripleKill}>Triple Kill !!</button>
            </div>
        )
    }
}
export default Score_keeper;