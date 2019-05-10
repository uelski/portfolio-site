import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import PaintingSlide from './PaintingSlide';
import abstractOne from '../images/abstract_1_cropped-small.jpg';
import abstractTwo from '../images/abstract_2_cropped-small.JPG';
import abstractFour from '../images/abstract_4_cropped-small.JPG';
import abstractFive from '../images/abstract_5_cropped-small.JPG';
import abstractEight from '../images/abstract_8_cropped-small.JPG';
import nightSwim from '../images/night_swim-small.JPG';

class PaintingCarousel extends Component {
    render() {
        const paintingList = [
            {
                source: nightSwim,
                alt: 'night swim painting'
            },
            {
                source: abstractOne,
                alt: 'abstract one painting'
            },
            {
                source: abstractTwo,
                alt: 'abstract two painting'
            },
            {
                source: abstractFour,
                alt: 'abstract four painting'
            },
            {
                source: abstractFive,
                alt: 'abstract five painting'
            },
            {
                source: abstractEight,
                alt: 'abstract eight painting'
            },
        ]

        const paintingRender = paintingList.map((painting) => {
            return (
                <PaintingSlide key={painting.source} src={painting.source} alt={painting.alt} />
            )
        })
        return (
            <Carousel showThumbs={false}>
                {paintingRender}
            </Carousel>
        )
    }
}

export default PaintingCarousel;