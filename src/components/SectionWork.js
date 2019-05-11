import React, { Component } from 'react';
import WorkCard from './WorkCard';
import whirlpoolImage from '../images/whirlpool-screenshot.jpg';
import amanaImage from '../images/amana-homepage-screenshot.jpg';
import amanaBlogImage from '../images/amana-screenshot.jpg';
import arsImage from '../images/ars-screenshot.jpg';
import gladiatorImage from '../images/gladiator-screenshot.jpg';
import masonCosImage from '../images/mason-cos-screenshot.jpg';
import maytagImage from '../images/maytag-screenshot.jpg';
import mimmImage from '../images/mimm-screenshot.jpg';
import smartOvenImage from '../images/smart-oven-screenshot.jpg';
import kitchenAidImage from '../images/kitchenaid-screenshot.jpg';

class Work extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: 'all',
            cardList: [
                {
                    headline: 'Whirlpool',
                    copy: 'seomthinge',
                    link: 'https://www.whirlpool.com/',
                    imgSrc: whirlpoolImage,
                    imgAlt: 'Whirlpool Card Image',
                    type: 'brand'
                },
                {
                    headline: 'Maytag',
                    copy: 'something else',
                    link: 'https://www.maytag.com/',
                    imgSrc: maytagImage,
                    imgAlt: 'Maytag Card Image',
                    type: 'brand'
                },
                {
                    headline: 'KitchenAid',
                    copy: 'again something',
                    link: 'https://www.kitchenaid.com/',
                    imgSrc: kitchenAidImage,
                    imgAlt: 'Gladiator Card Image',
                    type: 'brand'
                },
                {
                    headline: 'Amana',
                    copy: 'sme more',
                    link: 'https://www.amana.com/',
                    imgSrc: amanaImage,
                    imgAlt: 'Amana Card Image',
                    type: 'brand'
                },
                {
                    headline: 'Gladiator',
                    copy: 'again something',
                    link: 'https://www.gladiatorgarageworks.com/',
                    imgSrc: gladiatorImage,
                    imgAlt: 'Gladiator Card Image',
                    type: 'brand'
                },
                {
                    headline: 'ARS',
                    copy: 'again soemthing again once more maybe',
                    link: 'http://aislerocket.com/',
                    imgSrc: arsImage,
                    imgAlt: 'Ars Card Image',
                    type: 'brand'
                },
                {
                    headline: 'May is Maytag Month',
                    copy: 'again soemthing again once more maybe',
                    link: 'http://www.maytag.com/may-is-maytag-month.html',
                    imgSrc: mimmImage,
                    imgAlt: 'May is Maytag Month',
                    type: 'experience'
                },
                {
                    headline: 'Whirlpool Smart Oven',
                    copy: 'again soemthing again once more maybe',
                    link: 'http://www.whirlpool.com/kitchen/cooking/smart-oven.html',
                    imgSrc: smartOvenImage,
                    imgAlt: 'Whirlpool Smart Oven',
                    type: 'experience'
                },
                {
                    headline: 'Amana Articles',
                    copy: 'again soemthing again once more maybe',
                    link: 'https://www.amana.com/articles/',
                    imgSrc: amanaBlogImage,
                    imgAlt: 'Whirlpool Smart Oven',
                    type: 'experience'
                },
                {
                    headline: 'Mason Cos',
                    copy: 'again soemthing again once more maybe',
                    link: 'https://www.masoncos.com',
                    imgSrc: masonCosImage,
                    imgAlt: 'Mason Cos',
                    type: 'personal'
                },
                {
                    headline: 'Portfolio',
                    copy: 'again soemthing again once more maybe',
                    link: '#',
                    imgSrc: whirlpoolImage,
                    imgAlt: 'Sam Vredenburgh',
                    type: 'personal'
                }
            ]
        }
    }
    clickNav(item) {
        this.setState({
            show: item
        })
    }
    render() {

        let renderList = [];
        if (this.state.show === 'all') {
            renderList = this.state.cardList;
        } else {
            renderList = this.state.cardList.filter((item) => item.type === this.state.show)
        }
        const cardNavs = renderList.map((card) => {
            return (
                <WorkCard key={card.link} imgSrc={card.imgSrc} imgAlt={card.imgAlt} headline={card.headline} copy={card.copy} link={card.link} />
            )
        })
        return(
            <section ref={this.props.refPass} className="page-section section--work">
                <div className="work-nav flex">
                    <ul className="flex">
                        <li onClick={() => this.clickNav('all')}>All</li>
                        <li onClick={() => this.clickNav('brand')}>Brands</li>
                        <li onClick={() => this.clickNav('experience')}>Experiences</li>
                        <li onClick={() => this.clickNav('personal')}>Personal</li>
                    </ul>
                </div>
                <div className="inner-container flex">
                    {cardNavs}
                </div>
            </section>
        )
    }
}

export default Work;