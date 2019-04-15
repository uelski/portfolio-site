import React, { Component } from 'react';

class WorkCard extends Component {


    render() {
        return(
            <div className="work-card-container">

                <div className="work-card-image-container">
                    <img src="" alt=""/>
                </div>
                <div className="work-card-copy-container">
                    <h2>{this.props.headline}</h2>
                    <p>{this.props.copy}</p>
                    <button>
                        <a href={this.props.link}>Check It Out</a>
                    </button>
                </div>

            </div>
        )
    }
}

export default WorkCard;