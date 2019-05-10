import React, { Component } from 'react';

class WorkCard extends Component {


    render() {
        return(
            <div className="work-card-container flex">

                <div className="work-card-image-container">
                    <img src={this.props.imgSrc} alt={this.props.imgAlt} />
                </div>
                <div className="work-card-copy-container">
                    <h3>{this.props.headline}</h3>
                    <a className='button--primary' href={this.props.link}>Explore</a>
                </div>

            </div>
        )
    }
}

export default WorkCard;