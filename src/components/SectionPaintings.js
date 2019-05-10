import React, { Component } from 'react';
import PaintingCarousel from './PaintingCarousel';

class Paintings extends Component {
    render() {
        return(
            <div ref={this.props.refPass} className="page-section section--paintings">
                <PaintingCarousel />
            </div>
        )
    }
}

export default Paintings;