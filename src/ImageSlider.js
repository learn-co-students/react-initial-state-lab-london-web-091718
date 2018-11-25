import React, { Component } from 'react'

class ImageSlider extends Component {

    state ={
        currentSlideIndex: 0
    }

    render () {
        const { currentSlideIndex } = this.state
        return (
            <div>
                <p>I am on slide {currentSlideIndex}</p>
            </div>
        )
    }
}

export default ImageSlider
