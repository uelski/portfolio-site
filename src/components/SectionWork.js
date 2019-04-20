import React, { Component } from 'react';
import WorkCard from './WorkCard';
import whirlpoolImage from '../images/whirlpool-screenshot.jpg';

class Work extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const cardList = [
            {
                headline: 'Whirlpool',
                copy: 'seomthinge',
                link: 'https://www.whirlpool.com/',
                imgSrc: whirlpoolImage,
                imgAlt: 'Whirlpool Card Image'
            },
            {
                headline: 'Maytag',
                copy: 'something else',
                link: 'https://www.maytag.com/',
                imgSrc: whirlpoolImage,
                imgAlt: 'Maytag Card Image'
            },
            {
                headline: 'KitchenAid',
                copy: 'again something',
                link: 'https://www.kitchenaid.com/',
                imgSrc: whirlpoolImage,
                imgAlt: 'Gladiator Card Image'
            },
            {
                headline: 'Amana',
                copy: 'sme more',
                link: 'https://www.amana.com/',
                imgSrc: whirlpoolImage,
                imgAlt: 'Amana Card Image'
            },
            {
                headline: 'Gladiator',
                copy: 'again something',
                link: 'https://www.gladiatorgarageworks.com/',
                imgSrc: whirlpoolImage,
                imgAlt: 'Gladiator Card Image'
            },
            {
                headline: 'ARS',
                copy: 'again soemthing again once more maybe',
                link: 'http://aislerocket.com/',
                imgSrc: whirlpoolImage,
                imgAlt: 'Ars Card Image'
            }
        ]
        const cardNavs = cardList.map((card) => {
            return (
                <WorkCard key={card.link} imgSrc={card.imgSrc} imgAlt={card.imgAlt} headline={card.headline} copy={card.copy} link={card.link} />
            )
        })
        return(
            <section ref={this.props.refPass} className="page-section section--work">
                <div className="inner-container flex">
                    {cardNavs}
                </div>
            </section>
        )
    }
}

export default Work;