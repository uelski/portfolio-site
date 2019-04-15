import React, { Component } from 'react';
import MastheadLink from './MastheadLink';

class Masthead extends Component {
    render() {
        const links = [
            {
                link: this.props.workRef,
                label: 'Web Developer'
            },
            {
                link: this.props.musicRef,
                label: 'Musician'
            },
            {
                link: '#about-target',
                label: 'Skier'
            }
        ];
        const linkList = links.map((l) => {
            return <MastheadLink key={l.link} link={l.link} label={l.label} />
        })
        return (
            <div className="masthead-container">
                <div className="masthead-content-container">
                    <h1>Sam Vredenburgh</h1>
                    <ul>
                        {linkList}
                    </ul>

                </div>
            </div>
        )
    }
}

export default Masthead;