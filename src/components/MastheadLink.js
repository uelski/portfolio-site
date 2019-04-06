import React, { Component } from 'react';

class MastheadLink extends Component {
    
    render() {
        return(
            <li>
                <a href={this.props.link}>{this.props.label}</a>
            </li>
        )
    }
}

export default MastheadLink