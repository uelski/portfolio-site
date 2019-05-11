import React, { Component } from 'react';
import PaintingCarousel from './PaintingCarousel';
import SectionHeader from './SectionHeader';

class Paintings extends Component {
    render() {
        return(
            <div ref={this.props.refPass} className="page-section section--paintings">
                <SectionHeader header="Paintings" subheader="I Like to Paint" />
                <PaintingCarousel />
            </div>
        )
    }
}

export default Paintings;