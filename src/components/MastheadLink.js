import React, { Component } from 'react';

class MastheadLink extends Component {
    
    render() {
        return(
            <li className='masthead-link'>
                <a href data-href={this.props.link}>{this.props.label}</a>
            </li>
        )
    }
}

export default MastheadLink