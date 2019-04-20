import React, { Component } from 'react';

class Navigation extends Component {
    constructor(props){
        super(props)

        // this.contactRef = React.createRef();

    }
    scroll(r) {
        console.log(r)
        r.current.scrollIntoView({behavior: 'smooth'});
    }
    render() {
        const navLinks = [
            {
                link: this.props.bioRef,
                label: 'Bio'
            },
            {
                link: this.props.workRef,
                label: 'Work'
            },
            {
                link: this.props.musicRef,
                label: 'Music'
            },
            {
                link: this.props.paintingRef,
                label: 'Paintings'
            },
            {
                link: this.props.contactRef,
                label: 'Contact'
            }
        ]
        const navLinkList = navLinks.map((link) => {
            return (
                <li key={link.link}>
                    <a href onClick={() => {this.scroll(link.link)}}>{link.label}</a>
                </li>
            )
        })
        return (
            <div className='navigation-container'>
                <ul className="flex">
                    {navLinkList}
                </ul>
            </div>
        )
    }
}

export default Navigation