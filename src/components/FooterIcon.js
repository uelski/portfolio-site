import React, { Component } from 'react';

class FooterIcon extends Component {
    render() {

        return (
            <a className="footer-icon" target="_blank" href={this.props.link}>
                <img src={this.props.src} alt={this.props.alt}/>
            </a>
        )
        
    }
}

export default FooterIcon;
