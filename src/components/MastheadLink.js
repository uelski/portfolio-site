import React, { Component } from 'react';

class MastheadLink extends Component {
    
    constructor(props){
        super(props)

        // this.props.link = React.createRef();
    }
    scroll(r) {
        console.log('click')
        // r.current.scrollIntoView({behavior: 'smooth'});
    }
    render() {
        return(
            <li className='masthead-link'>
                <a href onClick={() => {this.scroll(this.props.link)}}>{this.props.label}</a>
            </li>
        )
    }
}

export default MastheadLink