import React, { Component } from 'react'

class Bomb extends Component {

    state = {
        secondsLeft: this.props.initialCount
    }

    render () {
        const {secondsLeft} = this.state
        return (
            <div>
                {secondsLeft === 0 ? 'Boom!' : `${secondsLeft} seconds left before I go boom!`}
            </div>
        )
    }
}

export default Bomb
