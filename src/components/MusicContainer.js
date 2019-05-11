import React, { Component } from 'react';

class MusicContainer extends Component {
    render() {
        return(
            <div className="music-container">
                if (this.props.type === 'Bandcamp') {
                    <iframe style="border: 0; width: 100%; height: 42px;" src={this.props.source} seamless><a href={this.props.link}>{this.props.text}</a></iframe>
                } else {
                    <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src={this.props.source}></iframe>
                }
            </div>
        )
    }
}

export default MusicContainer;