import React from 'react'

class Bomb extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      secondsLeft : this.props.initialCount
    }
  }

  render() {
    const {secondsLeft} = this.state
    return (
      <div>
        {
          secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
        }
      </div>
    )
  }
}

export default Bomb