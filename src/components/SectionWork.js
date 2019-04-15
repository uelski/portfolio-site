import React, { Component } from 'react';
import WorkCard from './WorkCard';

class Work extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const cardList = [
            {
                headline: 'Whirlpool',
                copy: 'seomthinge',
                link: 'https://www.whirlpool.com/'
            },
            {
                headline: 'Maytag',
                copy: 'something else',
                link: 'https://www.maytag.com/'
            },
            {
                headline: 'Amana',
                copy: 'sme more',
                link: 'https://www.amana.com/'
            },
            {
                headline: 'Gladiator',
                copy: 'again something',
                link: 'https://www.gladiatorgarageworks.com/'
            },
            {
                headline: 'Aisle Rocket Studios',
                copy: 'again soemthing again once more maybe',
                link: 'http://aislerocket.com/'
            }
        ]
        const cardNavs = cardList.map((card) => {
            return (
                <WorkCard headline={card.headline} copy={card.copy} link={card.link} />
            )
        })
        return(
            <div ref={this.props.refPass} className="page-section section--work">
                {cardNavs}
            </div>
        )
    }
}

export default Work;