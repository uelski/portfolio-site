import React, { Component } from 'react';

class Masthead extends Component {
    render() {
        return (
            <div className="masthead-container">
                <video autoPlay loop muted preload="true">
                    <source src="/masthead_video.mp4" type="video/mp4" />
                </video>
            </div>
        )
    }
}

export default Masthead;