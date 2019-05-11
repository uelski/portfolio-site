import React, { Component } from 'react';

class SectionHeader extends Component {

    render() {
        if (this.props.subheader) {
            return(
                <div className="section--header">
                    <h2>{this.props.header}</h2>
                    <p>{this.props.subheader}</p>
                </div>
            )
        } else {
            return (
                <div className="section--header">
                    <h2>{this.props.header}</h2>
                </div>
            )
        }
    }
}

export default SectionHeader;