import React, { Component } from 'react';

class WorkCard extends Component {


    render() {
        return(
            <div className="work-card-container flex">

                <div className="work-card-image-container">
                    <img src={this.props.imgSrc} alt={this.props.imgAlt} />
                </div>
                <div className="work-card-copy-container">
                    <h2>{this.props.headline}</h2>
                    <p>{this.props.copy}</p>
                    <a className='button--primary' href={this.props.link}>Check It Out</a>
                </div>

            </div>
        )
    }
}

export default WorkCard;