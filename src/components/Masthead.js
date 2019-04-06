import React, { Component } from 'react';
import MastheadLink from './MastheadLink';

class Masthead extends Component {
    render() {
        const links = [
            {
                link: 'https://github.com/uelski',
                label: 'Web Developer'
            },
            {
                link: 'https://masoncos.bandcamp.com/',
                label: 'Synthesizer Enthusiast'
            },
            {
                link: 'https://www.facebook.com/sam.vredenburgh',
                label: 'Skier'
            }
        ];
        const linkList = links.map((l) => {
            return <MastheadLink link={l.link} label={l.label} />
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