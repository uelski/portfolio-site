import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        const navLinks = [
            {
                link: '#bio-target',
                label: 'Bio'
            },
            {
                link: '#work-target',
                label: 'Work'
            },
            {
                link: '#music-target',
                label: 'Music'
            },
            {
                link: '#painting-target',
                label: 'Paintings'
            },
            {
                link: '#contact-target',
                label: 'Contact'
            }
        ]
        const navLinkList = navLinks.map((link) => {
            return (
                <li>
                    <a href={link.link}>{link.label}</a>
                </li>
            )
        })
        return (
            <div className='navigation-container'>
                <ul>
                    {navLinkList}
                </ul>
            </div>
        )
    }
}

export default Navigation