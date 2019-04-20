import React, { Component } from 'react';
import bioImg from '../images/sam_vredenburgh.jpg';

class Bio extends Component {
    render() {
        return (
            <div ref={this.props.refPass} className="page-section section--bio flex">
                <div className="section--bio__image-container">
                    <img src={bioImg} alt="image of Sam"/>
                </div>
                <div className="section--bio__copy-container">
                    <p>
                    Short skis suck, long skis truck. Bunny hill carving the rack. Crud whiteface daffy buttermilk. Crud schweitzer scarlett's monarch ski area mount bachelor shred ski cooper herringbone eaglecrest dynastar. Warren miller hoodoo katja seizinger ducking the rope bulletproof pine knob catskiing faceshots.
                    </p>
                </div>
            </div>
        )
    }
}

export default Bio;