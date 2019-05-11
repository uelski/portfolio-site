import React, { Component } from 'react';

class PaintingSlide extends Component {
    render() {
        return (
            <div className="painting-slide--container">
                <img src={this.props.src} alt={this.props.alt}/>
            </div>
        )
    }
}

export default PaintingSlide;